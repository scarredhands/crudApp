const express= require("express")
const app= express()
const mongoose= require("mongoose")




mongoose.connect("mongodb+srv://jenayatika:xPw0AlpDnykkkglK@backenddb.2e5sb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB")
.then(()=>{
    console.log("connected to db");
    app.listen(3000,()=>{
        console.log("server is running")
    })
})
.catch(()=> {
    console.log("connection failed")
})