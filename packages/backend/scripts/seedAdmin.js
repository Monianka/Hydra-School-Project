


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const AdminUser = require('../models/AdminUser');

async function seedAdmin(){
    try{
    await mongoose.connect(process.env.MONGODB_URI);

    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    const name = process.env.ADMIN_NAME || 'Admin';

    if(!email || !password)
    {
        throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD are required')
    }

    const existingAdmin = await AdminUser.findOne({email});

    if(existingAdmin)
    {
        console.log('Admin user already exists');
        await mongoose.disconnect();
        return;
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await AdminUser.create({email, passwordHash, name});

    console.log('Admin user created successfully');
    await mongoose.disconnect();
    }catch(error){
        console.error('Failed to seed admin user', error.message);
        await mongoose.disconnect();
        process.exit(1);
    }

}

seedAdmin();