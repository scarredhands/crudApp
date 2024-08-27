const express= require("express")
const app= express()
const mongoose= require("mongoose")
const Product= require("./models/product.model")

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hii")
})
app.get('/api/products',async(req,res)=>{
    try{
        const products= await Product.find({})
        res.status(200).json(products)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})

app.post('/api/products',async(req,res)=>{
    try{
        const product= await Product.create(req.body)
        res.status(200).json(product)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})

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