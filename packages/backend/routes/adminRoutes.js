const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Course = require('../models/Course');
const InviteToken = require('../models/InviteTokens');
const requireAdmin = require('../middleware/requireAdmin');
const hashInviteToken = require('../utils/hashInviteToken');
const AdminUser = require('../models/AdminUser');

const allowedLanguages = ['en', 'pl'];
const allowedBookingModes = ['student_selects', 'admin_selected', 'general'];
const allowedSources = ['instagram','facebook', 'website', 'email', 'phone', 'manual'];

function createIdempotentRawToken(adminId, idempotencyKey) {
    const secret = process.env.INVITATION_TOKEN_SECRET || process.env.JWT_SECRET;

    if (!secret) {
        throw new Error('Invitation token secret is not configured');
    }

    return crypto
        .createHmac('sha256', secret)
        .update(`${adminId}:${idempotencyKey}`)
        .digest('hex');
}

function buildInvitationResponse(invitation, link) {
    return {
        link,
        invitation: {
            id: invitation._id,
            courseSlug: invitation.courseSlug,
            courseSnapshot: invitation.courseSnapshot,
            language: invitation.language,
            bookingMode: invitation.bookingMode,
            sessionId: invitation.sessionId,
            expiresAt: invitation.expiresAt,
            oneTime: invitation.oneTime,
            source: invitation.source,
            note: invitation.note,
            active: invitation.active,
            createdAt: invitation.createdAt,
        },
    };
}

const router = express.Router();

router.post('/login', async(req, res)=>{
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message: 'Email and password are required'});

        }
        const normalizedEmail = email.trim().toLowerCase();
        const admin = await AdminUser.findOne({email: normalizedEmail});

        if(!admin){
            return res.status(401).json({message: 'Invalid email or password'});

        }

        const isPasswordCorrect = await bcrypt.compare(password, admin.passwordHash);

        if(!isPasswordCorrect){
            return res.status(401).json({message: 'Invalid email or password'});

        }

        const token=jwt.sign(
            {
                adminId: admin._id,
                email: admin.email,
                role: admin.role,
            },
            process.env.JWT_SECRET,
            {expiresIn: '1d'}
        );

        res.json({token,
            admin:{
                id: admin._id,
                email: admin.email,
                name: admin.name,
                role: admin.role,
            },
        });

    }catch(error){
        res.status(500).json({message: 'Failed to login', error: error.message});
    }
});

router.post('/invitations', requireAdmin, async(req, res) => {
    let idempotencyKey;

    try{
        idempotencyKey = req.header('Idempotency-Key')?.trim();

        if(!idempotencyKey){
            return res.status(400).json({message: 'Idempotency-Key header is required'});
        }

        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
        const existingInvitation = await InviteToken.findOne({
            createdBy: req.admin.adminId,
            idempotencyKey,
        });

        if(existingInvitation){
            const rawToken = createIdempotentRawToken(req.admin.adminId, idempotencyKey);
            const link = `${frontendUrl.replace(/\/$/, '')}/customer-consent/${rawToken}`;

            return res.status(200).json(buildInvitationResponse(existingInvitation, link));
        }

        const{
            courseSlug,
            language = 'en',
            bookingMode = 'student_selects',
            sessionId = null,
            expiresInDays = 14,
            oneTime = true,
            source = 'manual',
            note = '',
    
        } = req.body ?? {};

        if(!courseSlug){
            return res.status(400).json({message:"courseSlug is required "});
        }

        if(!allowedLanguages.includes(language)){
            return res.status(400).json({message: 'Invalid language'});
        }

        if(!allowedBookingModes.includes(bookingMode)){
             return res.status(400).json({message: 'Invalid booking mode'});
        }

        if(!allowedSources.includes(source)){
            return res.status(400).json({message: 'Invalid source'});
        }
        const days = Number(expiresInDays);

        if(!Number.isInteger(days) || days <1 || days > 90){
            return res.status(400).json({message:'expiresInDays must be an integer between 1 and 90', })
        }

        const course = await Course.findOne({
      slug: courseSlug,
      active: true,
    }).lean();

    if (!course) {
      return res.status(404).json({ message: 'Active course not found' });
    }

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + days);

    const courseSnapshot = {
      id: course._id.toString(),
      slug: course.slug,
      name: course.translations[language].name,
      priceAmount: course.priceAmount,
      currency: course.currency,
    };

    const rawToken = createIdempotentRawToken(req.admin.adminId, idempotencyKey);
    const tokenHash = hashInviteToken(rawToken);

    const invitation = await InviteToken.create({
      tokenHash,
      courseSlug: course.slug,
      courseSnapshot,
      language,
      bookingMode,
      sessionId,
      expiresAt,
      oneTime,
      source,
      note,
      active: true,
      createdBy: req.admin.adminId,
      idempotencyKey,
    });

    const link = `${frontendUrl.replace(/\/$/, '')}/customer-consent/${rawToken}`;

    return res.status(201).json(buildInvitationResponse(invitation, link));
  } catch (error) {
    if (error?.code === 11000 && idempotencyKey) {
      const existingInvitation = await InviteToken.findOne({
        createdBy: req.admin.adminId,
        idempotencyKey,
      });

      if(existingInvitation){
        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
        const rawToken = createIdempotentRawToken(req.admin.adminId, idempotencyKey);
        const link = `${frontendUrl.replace(/\/$/, '')}/customer-consent/${rawToken}`;

        return res.status(200).json(buildInvitationResponse(existingInvitation, link));
      }
    }

    return res.status(500).json({
      message: 'Failed to create invitation',
      error: String(error),
    });
  }
    
});

module.exports = router;











