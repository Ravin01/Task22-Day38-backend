import Express from "express";
import { postRouter } from "./routes/post.js";
import { connectToDb } from "./db/mongoDBConnection.js";
import  cors from "cors";


const app = Express()

const port = process.env.PORT || 5010


await connectToDb()




// middleware

app.use(Express.json()) //for getting data from postman

app.use(cors())

app.use('/', postRouter)



app.listen(port, ()=> console.log("Server is running on : ", port))