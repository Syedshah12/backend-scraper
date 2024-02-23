const mongoose=require('mongoose');
const MONGO_URL=require('dotenv').config();


const connectDb=async ()=>{
    try {
        // get connection string from mongodb atlas and paste here...here string is stored in .env file as process.env.MONGO_URl
        const con=await mongoose.connect(process.env.MONGO_URl,{
        })
        console.log('connect to db');
   
    } catch (error) {
        console.log("there was an error connecting to db")

    }
}



connectDb();
module.exports=connectDb;