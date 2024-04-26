// require('dotenv').config({path: './env'})
import express from "express"
const app = express()
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({path: './env'})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
    // app.on("error", (error)=>{
    //     console.log("error: ", error);
    //     throw error
    // })
})
.catch((err)=>{
    console.log("MongoDB connection fail!!  ", err);
})






/*
import express from "express"
const app = express()

// function connectDB(){}
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("error: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(`Error : ${error}`);
        throw error
    }
} )()

*/