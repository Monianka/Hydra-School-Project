const express = require('express');
const Blog = require('../models/Blog');
const { generatePost } = require('../services/aiService');
const { slugify } = require('../utils/slug');
const router = express.Router();

// Helper: project a Blog document to a language-specific shape
function projectByLang(doc, lang = 'en') {
  const t = doc.translations?.[lang] || doc.translations?.en;
  return {
    id: doc._id,
    title: t?.title,
    slug: t?.slug,
    content: t?.content,
    coverImage: doc.coverImage,
    tags: doc.tags,
    author: doc.author,
    published: doc.published,
    publishedAt: doc.publishedAt,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  };
}

// GET /api/blogs?lang=en — list published posts
router.get('/', async (req, res) => {
  try {
    const lang = (req.query.lang || 'en').toLowerCase();
    const posts = await Blog.find({ published: true }).sort({ createdAt: -1 });
    res.json(posts.map((p) => projectByLang(p, lang)));
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch posts', error: String(err) });
  }
});

// GET /api/blogs/:slug?lang=en — get single post by language-specific slug
router.get('/:slug', async (req, res) => {
  try {
    const lang = (req.query.lang || 'en').toLowerCase();
    const path = `translations.${lang}.slug`;
    const post = await Blog.findOne({ [path]: req.params.slug, published: true });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(projectByLang(post, lang));
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch post', error: String(err) });
  }
});

// POST /api/blogs — create a post (manual). Expect translations.en and translations.pl
router.post('/', async (req, res) => {
  try {
    const { translations, coverImage, tags, author, published } = req.body || {};
    if (!translations?.en?.title || !translations?.en?.content || !translations?.pl?.title || !translations?.pl?.content) {
      return res.status(400).json({ message: 'translations.en/pl with title and content are required' });
    }
    const enSlug = slugify(translations.en.slug || translations.en.title);
    const plSlug = slugify(translations.pl.slug || translations.pl.title);

    const post = new Blog({
      translations: {
        en: { title: translations.en.title, content: translations.en.content, slug: enSlug },
        pl: { title: translations.pl.title, content: translations.pl.content, slug: plSlug },
      },
      coverImage: coverImage || null,
      tags: Array.isArray(tags) ? tags : [],
      author: author || undefined,
      published: Boolean(published),
      publishedAt: published ? new Date() : undefined,
    });
    await post.save();
    res.status(201).json(projectByLang(post, 'en'));
  } catch (err) {
    // Handle duplicate slug errors clearly
    if (err?.code === 11000) {
      return res.status(409).json({ message: 'Duplicate slug for language', keyValue: err.keyValue });
    }
    res.status(500).json({ message: 'Failed to create post', error: String(err) });
  }
});

// POST /api/blogs/generate — AI-assisted draft generation (both languages)
router.post('/generate', async (req, res) => {
  try {
    const { topic, tone, keywords } = req.body || {};
    if (!topic) return res.status(400).json({ message: 'topic is required' });

    const draft = await generatePost({ topic, tone, keywords });
    const enSlug = slugify(draft.en.title);
    const plSlug = slugify(draft.pl.title);

    const post = new Blog({
      translations: {
        en: { title: draft.en.title, content: draft.en.content, slug: enSlug },
        pl: { title: draft.pl.title, content: draft.pl.content, slug: plSlug },
      },
      tags: draft.tags || [],
      coverImage: draft.coverImage || null,
      published: false,
    });
    await post.save();
    res.status(201).json({ id: post._id, message: 'Draft created', slugs: { en: enSlug, pl: plSlug } });
  } catch (err) {
    res.status(500).json({ message: 'Failed to generate draft', error: String(err) });
  }
});

// PUT /api/blogs/:id — update post fields (including translations)
router.put('/:id', async (req, res) => {
  try {
    const { translations, coverImage, tags, author, published } = req.body || {};
    const update = {};

    if (translations?.en) {
      update['translations.en.title'] = translations.en.title;
      update['translations.en.content'] = translations.en.content;
      if (translations.en.slug || translations.en.title) {
        update['translations.en.slug'] = slugify(translations.en.slug || translations.en.title);
      }
    }
    if (translations?.pl) {
      update['translations.pl.title'] = translations.pl.title;
      update['translations.pl.content'] = translations.pl.content;
      if (translations.pl.slug || translations.pl.title) {
        update['translations.pl.slug'] = slugify(translations.pl.slug || translations.pl.title);
      }
    }
    if (coverImage !== undefined) update.coverImage = coverImage;
    if (author !== undefined) update.author = author;
    if (Array.isArray(tags)) update.tags = tags;
    if (typeof published === 'boolean') {
      update.published = published;
      update.publishedAt = published ? new Date() : undefined;
    }

    const post = await Blog.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(projectByLang(post, 'en'));
  } catch (err) {
    if (err?.code === 11000) return res.status(409).json({ message: 'Duplicate slug', keyValue: err.keyValue });
    res.status(500).json({ message: 'Failed to update post', error: String(err) });
  }
});

// DELETE /api/blogs/:id — delete post
router.delete('/:id', async (req, res) => {
  try {
    const resDoc = await Blog.findByIdAndDelete(req.params.id);
    if (!resDoc) return res.status(404).json({ message: 'Post not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete post', error: String(err) });
  }
});

module.exports = router;
