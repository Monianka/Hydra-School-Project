const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const blogRoutes = require('./routes/blogRoutes');
const consentRoutes = require('./routes/consentRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

function buildMongoUri() {
  const base = process.env.MONGODB_URI || '';
  const db = process.env.MONGODB_DB || '';
  if (!base) return '';

  try {
    // If it already contains a database segment (e.g. /mydb), keep as-is
    const hasDbPath = /mongodb(?:\+srv)?:\/\/.+\/.+/.test(base) && !/\/@[^/]*\/?$/.test(base);
    if (hasDbPath || !db) return base;

    // Insert /<db> before any query string
    const [left, qs] = base.split('?');
    const withDb = left.replace(/\/?$/, `/${db}`);
    return qs ? `${withDb}?${qs}` : withDb;
  } catch (_) {
    return base;
  }
}

const mongoUri = buildMongoUri();

function logMongoTarget(uri) {
  if (process.env.DEBUG_DB !== '1') return;
  try {
    const m = uri.match(/^mongodb(?:\+srv)?:\/\/([^@]+)@([^\/?]+)(?:\/([^?]*))?/);
    const auth = m?.[1] || '';
    const hosts = m?.[2] || '';
    const db = m?.[3] || '';
    const user = auth.split(':')[0] || '';
    const hasPassword = auth.includes(':');
    console.log('DB Debug:', { user, hasPassword, hosts, db });
  } catch (_) {
    console.log('DB Debug: unable to parse URI');
  }
}

logMongoTarget(mongoUri);

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err?.message || err);
    // Helpful hint if auth fails
    if (String(err?.message || '').toLowerCase().includes('auth')) {
      console.error(
        'Tip: Check username/password, database name, and URL-encoding of special characters. Optionally set MONGODB_DB in .env.'
      );
    }
    process.exit(1);
  });

app.use('/api/blogs', blogRoutes);
app.use('/api/consent', consentRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
