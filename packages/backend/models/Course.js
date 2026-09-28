const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseTranslationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

const CourseSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    },
    translations: {
      pl: {
        type: CourseTranslationSchema,
        required: true,
      },
      en: {
        type: CourseTranslationSchema,
        required: true,
      },
    },
    priceAmount: {
      type: Number,
      required: true,
      min: 0,
      validate: {
        validator: Number.isInteger,
        message: 'priceAmount must be an integer',
      },
    },
    currency: {
      type: String,
      required: true,
      default: 'GBP',
      uppercase: true,
      trim: true,
      match: /^[A-Z]{3}$/,
    },
    iconKey: {
      type: String,
      required: true,
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    sortOrder: {
      type: Number,
      required: true,
      min: 0,
      validate: {
        validator: Number.isInteger,
        message: 'sortOrder must be an integer',
      },
    },
  },
  { timestamps: true }
);

CourseSchema.index({ active: 1, sortOrder: 1 });

module.exports = mongoose.model('Course', CourseSchema);
