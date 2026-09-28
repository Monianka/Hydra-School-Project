const crypto = require('crypto');
const express = require('express');
const InviteToken = require('../models/InviteTokens');
const requireAdmin = require('../middleware/requireAdmin');
const hashInviteToken = require('../utils/hashInviteToken');

const router = express.Router();

router.post('/', requireAdmin, async (req, res) => {
  try {
    const { note, oneTime = true } = req.body ?? {};
    
    const rawToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = hashInviteToken(rawToken);
    const invite = await InviteToken.create({
      tokenHash,
      note,
      oneTime,
      active: true,
      source: 'admin',
      createdBy: req.admin?.adminId,
    });

    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    const link = `${frontendUrl.replace(/\/$/, '')}/customer-consent/${rawToken}`;

    res.status(201).json({
      link,
      oneTime: invite.oneTime,
      active: invite.active,
      note: invite.note,      
      createdAt: invite.createdAt,
    });
  } catch (err) {
    if (err?.code === 11000) {
      return res.status(409).json({ message: 'Generated token already exists. Please try again.' });
    }

    res.status(500).json({ message: 'Failed to create invite token', error: String(err) });
  }
});

module.exports = router;
