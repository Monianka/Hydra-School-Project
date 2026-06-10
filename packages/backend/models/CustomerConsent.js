

const mongoose = require('mongoose');

const CustomerConsentSchema = new mongoose.Schema({
    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, required: true, trim: true},
    email: {type: String, required: true,},
    dob: {type: Date, required: true},
    phone: {type: String, required: true},
    agreed: {type: Boolean, required: true},
    signatureName: {type: String, required: true},
    token: {type: String, required: true, index: true},
    termsVersion: {type: String},
    signedAt: {type: Date},
    ip: {type: String},
}, {timestamps: true});

CustomerConsentSchema.index({token: 1});
CustomerConsentSchema.index({signedAt: -1});

module.exports = mongoose.model('CustomerConsent', CustomerConsentSchema);