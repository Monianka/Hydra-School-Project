
const express = require('express');
const InviteToken = require('../models/intiveTokens');
const CustomerConsent = require('../models/customerConsent');

const router = express.Router();

router.get('/:token', async(req,res) =>{
   try{
    const invite = await InviteToken.findOne({
        token: req.params.token,
        active: true,
    });
    if(!invite){
        return res.status(404).json({ message: 'Invalid or expired link' });
    }
    res.json({valid: true});
   }catch(err){
    res.status(500).json({message: 'Failed to validate link', error: String(err)});
   }
});

router.post('/:token', async(req,res)=>{
    try{
        const invite = await InviteToken.findOne({
            token: req.params.token,
            active: true,
        });
        if(!invite){
            return res.status(404).json({message: 'Invalid or expired link'});  
        }
        if(invite.oneTime && invite.usedAt){
            return res.status(409).json({message: 'This link has already been used '});
        }
        const {firstName, lastName, email, dob, phone, agreed, signatureName, courseSlug, courseName} = req.body;

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
        courseSlug,
        courseName,
        signatureName,
        token: req.params.token,
        termsVersion: '2026-06-11',
        signedAt: new Date(),
        ip: req.ip,
    })
    if(invite.oneTime){
        invite.usedAt= new Date();
        await inivite.save();
    }
    res.status(201).json({success: true, id: constent_id,});
    }catch(err){
        res.status (500).json({message: 'Failed to save consent', error: String(err)});
    }
});

module.exports = router;