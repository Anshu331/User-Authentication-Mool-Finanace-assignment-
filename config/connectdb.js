// import mongoose from 'mongoose';

// const connectDB = async (DATABASE_URL) => {
//   try {
//     const DB_OPTIONS = {
//       dbName: "moolfintech"
//     }
//     await mongoose.connect(DATABASE_URL, DB_OPTIONS)
//     console.log('Connected Successfully to Database')
//   } catch (error) {
//     console.log(error)
//   }
// }

// export default connectDB


// connectdb.js
// config/connectdb.js
// config/connectdb.js
// In your connectdb.js file
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL, { dbName: 'moolfintech' }); 
    console.log('Connected Successfully to Database');
  } catch (error) {
    console.error('Database connection error:', error.message);
  }
};

export default connectDB;


