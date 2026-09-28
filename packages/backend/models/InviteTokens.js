//store short-lived invite links
//**@token: the random link token users receive-must be unique
// @ note:optional admin note (who/why)
// @active: quick revoke without deleting 
// @oneTime: if true, mark used after first submission
// @usedAt:audit when used
// @createdAt: audit and sorting  */


const mongoose = require('mongoose');


const InviteTokenSchema = new mongoose.Schema(
  {
    token: { type: String, required: false, select: false },
    tokenHash: { type: String, required: true, unique: true, index: true },
    note: { type: String },
    courseSlug: { type: String, trim: true },
    courseSnapshot: { id: String, slug: String, name: String },
    language: { type: String, enum: ["en", "pl"], default: "en" },
    bookingMode: {
      type: String,
      enum: ["student_selects", "admin_selected", "general"],
      default: "student_selects",
    },
    sessionId: { type: String, trim: true },
    expiresAt: { type: Date },
    source: {
      type: String,
      enum: ["instagram", "facebook", "website", "email", "phone", "manual"],
      default: "manual",
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "AdminUser" },
    idempotencyKey: { type: String, trim: true, index: true },
    active: { type: Boolean, default: true },
    oneTime: { type: Boolean, default: false },
    usedAt: { type: Date },
    openedAt: { type: Date },
  },
  { timestamps: true },
);

InviteTokenSchema.index({active: 1}, {createdAt: -1});
InviteTokenSchema.index(
  { createdBy: 1, idempotencyKey: 1 },
  {
    unique: true,
    partialFilterExpression: {
      idempotencyKey: { $exists: true },
    },
  },
);

module.exports = mongoose.model('InviteToken', InviteTokenSchema);
