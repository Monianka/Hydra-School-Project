
const express = require('express');
const InviteToken = require('../models/InviteTokens');
const CustomerConsent = require('../models/CustomerConsent');
const hashInviteToken = require('../utils/hashInviteToken');

const router = express.Router();

function getInviteAccessError(invite) {
    if (!invite) {
        return { status: 404, message: 'Invalid link' };
    }

    if (!invite.active) {
        return { status: 410, message: 'This link is no longer active' };
    }

    if (!invite.expiresAt || invite.expiresAt <= new Date()) {
        return { status: 410, message: 'This link has expired' };
    }

    if (invite.oneTime && invite.usedAt) {
        return { status: 409, message: 'This link has already been used' };
    }

    return null;
}

router.get('/:token', async(req,res) =>{
   try{
    const tokenHash = hashInviteToken(req.params.token);
    const invite = await InviteToken.findOne({
        tokenHash,
    });

    const accessError = getInviteAccessError(invite);

    if(accessError){
        return res.status(accessError.status).json({ message: accessError.message });
    }

    if(!invite.openedAt){
        invite.openedAt = new Date();
        await invite.save();
    }

    res.json({
        valid: true,
        course: {
            slug: invite.courseSlug,
            snapshot: invite.courseSnapshot,
        },
        language: invite.language,
        bookingMode: invite.bookingMode,
        expiresAt: invite.expiresAt,
    });
   }catch(err){
    res.status(500).json({message: 'Failed to validate link', error: String(err)});
   }
});

router.post('/:token', async(req,res)=>{
    try{
        const tokenHash = hashInviteToken(req.params.token);
        const invite = await InviteToken.findOne({
            tokenHash,
        });

        const accessError = getInviteAccessError(invite);

        if(accessError){
            return res.status(accessError.status).json({message: accessError.message});
        }

        const {firstName, lastName, email, dob, phone, agreed, signatureName} = req.body;

        if(!firstName || !lastName || !email || !dob || !phone || !signatureName){
            return res.status(400).json({message: 'All required fields must be completed '});
        } 
        if(agreed !== true){
            return res.status(400).json({message: 'Terms and conditions must be accepted'});
        }

    const consent = await CustomerConsent.create({
        firstName,
        lastName,
        email,  
        dob,
        phone,
        agreed,
        courseSlug: invite.courseSlug,
        courseName: invite.courseSnapshot?.name,
        signatureName,
        inviteTokenId: invite._id,
        termsVersion: '2026-06-11',
        signedAt: new Date(),
        ip: req.ip,
    })
    if(invite.oneTime){
        invite.usedAt= new Date();
        await invite.save();
    }
    res.status(201).json({success: true, id: consent._id,});
    }catch(err){
        res.status (500).json({message: 'Failed to save consent', error: String(err)});
    }
});

module.exports = router;
