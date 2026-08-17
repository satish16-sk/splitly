import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import {connectDB} from './db.config';

const cleanDatabase = async ()=> {
    if(process.env.NODE_ENV === 'production') {
        console.error('CRITICAL ERROR: Wiping database is forbidden in production!');
        process.exit(1);
    }

    try {
        console.log('Connectiong to database...');
        await connectDB();

        const collections = mongoose.connection.collections;
        const collectionNames = Object.keys(collections);

        console.log(`Found ${collectionNames.length} collections to purge.`);

        for (const name of collectionNames) {
            await collections[name].deleteMany({});
            console.log(`-Cleared collection: ${name}`);
            
        }

        console.log('\nDatabase cleared successfully!');
        process.exit(0);
    } catch(error) {
        console.log('Database cleanup failed:', error.message);
        process.exit(1);
    }
};

cleanDatabase();