//store short-lived invite links
//**@token: the random link token users receive-must be unique
// @ note:optional admin note (who/why)
// @active: quick revoke without deleting 
// @oneTime: if true, mark used after first submission
// @usedAt:audit when used
// @createdAt: audit and sorting  */


const mongoose = require('mongoose');

const InviteTokenSchema = new mongoose.Schema({
    token: {type: String, required: true, unique: true, index: true},
    note: {type: String},
    active: {type: Boolean, default: true},
    oneTime:{type: Boolean, default: false},
    usedAt: {type: Date},
    createdAt: {type: Date, default: Date.now}
})

InviteTokenSchema.index({active: 1}, {createdAt: -1});

module.exports = mongoose.model('InviteToken', InviteTokenSchema);