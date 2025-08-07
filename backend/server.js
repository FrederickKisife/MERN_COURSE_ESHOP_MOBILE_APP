const express = require("express")
const dotenv = require("dotenv").config()
const app =express()

const api = process.env.API_URL

//routes
app.get(api+"/products",(req, res)=>{
    res.send("Api created")
})



app.listen(5000, ()=>{
    console.log(api);
    
    console.log(`Server Running 5000`);
    
})