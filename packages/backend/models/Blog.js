const mongoose = require('mongoose');
const { Schema } = mongoose;

const TranslationSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    content: { type: String, required: true },
  },
  { _id: false }
);

const BlogSchema = new Schema(
  {
    translations: {
      en: { type: TranslationSchema, required: true },
      pl: { type: TranslationSchema, required: true },
    },
    coverImage: { type: String, default: null },
    tags: [{ type: String }],
    author: { type: String, default: 'Hydra-Scuba Diving School Team' },
    published: { type: Boolean, default: false },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

// Ensure language-specific slug uniqueness
BlogSchema.index({ 'translations.en.slug': 1 }, { unique: true, sparse: true });
BlogSchema.index({ 'translations.pl.slug': 1 }, { unique: true, sparse: true });

module.exports = mongoose.model('Blog', BlogSchema);
