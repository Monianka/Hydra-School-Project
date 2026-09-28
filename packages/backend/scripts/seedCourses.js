const mongoose = require('mongoose');
require('dotenv').config();

const Course = require('../models/Course');

const courses = [
  {
    slug: 'padi-discover-scuba-diving',
    translations: {
      pl: { name: 'PADI Discover Scuba Diving', duration: '2 godziny' },
      en: { name: 'PADI Discover Scuba Diving', duration: '2 hours' },
    },
    priceAmount: 8000,
    currency: 'GBP',
    iconKey: 'mask',
    active: true,
    sortOrder: 1,
  },
  {
    slug: 'padi-open-water-diver',
    translations: {
      pl: { name: 'PADI Open Water Diver', duration: '2–3 dni' },
      en: { name: 'PADI Open Water Diver', duration: '2–3 days' },
    },
    priceAmount: 52500,
    currency: 'GBP',
    iconKey: 'open-water',
    active: true,
    sortOrder: 2,
  },
  {
    slug: 'padi-advanced-open-water-diver',
    translations: {
      pl: { name: 'PADI Advanced Open Water Diver', duration: '2–3 dni' },
      en: { name: 'PADI Advanced Open Water Diver', duration: '2–3 days' },
    },
    priceAmount: 35000,
    currency: 'GBP',
    iconKey: 'compass',
    active: true,
    sortOrder: 3,
  },
  {
    slug: 'padi-rescue-diver',
    translations: {
      pl: { name: 'PADI Rescue Diver', duration: '2–3 dni' },
      en: { name: 'PADI Rescue Diver', duration: '2–3 days' },
    },
    priceAmount: 38000,
    currency: 'GBP',
    iconKey: 'lifebuoy',
    active: true,
    sortOrder: 4,
  },
  {
    slug: 'padi-divemaster',
    translations: {
      pl: { name: 'PADI Divemaster', duration: 'Indywidualny harmonogram' },
      en: { name: 'PADI Divemaster', duration: 'Individual schedule' },
    },
    priceAmount: 80000,
    currency: 'GBP',
    iconKey: 'divemaster',
    active: true,
    sortOrder: 5,
  },
  {
    slug: 'padi-deep-diver',
    translations: {
      pl: { name: 'PADI Deep Diver', duration: '2–3 dni' },
      en: { name: 'PADI Deep Diver', duration: '2–3 days' },
    },
    priceAmount: 25000,
    currency: 'GBP',
    iconKey: 'depth-gauge',
    active: true,
    sortOrder: 6,
  },
  {
    slug: 'padi-enriched-air-nitrox-diver',
    translations: {
      pl: { name: 'PADI Enriched Air (Nitrox) Diver', duration: '1–2 dni' },
      en: { name: 'PADI Enriched Air (Nitrox) Diver', duration: '1–2 days' },
    },
    priceAmount: 18000,
    currency: 'GBP',
    iconKey: 'nitrox-tank',
    active: true,
    sortOrder: 7,
  },
  {
    slug: 'padi-peak-performance-buoyancy',
    translations: {
      pl: { name: 'PADI Peak Performance Buoyancy', duration: '1–2 dni' },
      en: { name: 'PADI Peak Performance Buoyancy', duration: '1–2 days' },
    },
    priceAmount: 20000,
    currency: 'GBP',
    iconKey: 'bcd',
    active: true,
    sortOrder: 8,
  },
  {
    slug: 'padi-night-diver',
    translations: {
      pl: { name: 'PADI Night Diver', duration: '2 dni' },
      en: { name: 'PADI Night Diver', duration: '2–3 days' },
    },
    priceAmount: 24000,
    currency: 'GBP',
    iconKey: 'moon',
    active: true,
    sortOrder: 9,
  },
];

async function seedCourses() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is required');
    }

    await mongoose.connect(process.env.MONGODB_URI);

    const operations = courses.map((course) => ({
      updateOne: {
        filter: { slug: course.slug },
        update: { $set: course },
        upsert: true,
      },
    }));

    const result = await Course.bulkWrite(operations);

    console.log('Courses seeded successfully');
    console.log({
      matched: result.matchedCount,
      modified: result.modifiedCount,
      inserted: result.upsertedCount,
    });
  } catch (error) {
    console.error('Failed to seed courses:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

if (require.main === module) {
  seedCourses();
}

module.exports = { courses, seedCourses };
