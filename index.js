const express= require("express")
const app= express()
const mongoose= require("mongoose")
const Product= require("./models/product.model")
//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.get('/',(req,res)=>{
    res.send("hii")
})

//routes
//app.use("/api/products", productRoutes)

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

//update a product
app.put("/api/product/:id",async(req,res)=>{
    try{
        const {id} = req.params
        const product=await Product.findByIdAndUpdate(id, req.body)
        if(product==null){
            return res.status(404).json({message: "product not found"});
        }
        const updatedProduct= await Product.findById(id)
        res.status(200).json(updatedProduct)
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