const express= require("express")
const app= express()

app.listen(3000, ()=>{
    console.log("uuu");
});

app.get('/',(req,res)=>{
    res.send("hello world rh");
})