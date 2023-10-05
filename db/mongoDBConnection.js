import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config()

const userName = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const cluster = process.env.CLUSTER
const dbName = process.env.DB_NAME
const cloudUrl = `mongodb+srv://${userName}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`

const local = 'mongodb://localhost:27017/task22-day38'

export const connectToDb = async()=>{
    try{
        await mongoose.connect(cloudUrl, {
            useNewUrlParser : true
        })
        console.log('DB connected successfully')
    }catch(err){
        console.error('Error', err)
        process.exit(1)
    }
}