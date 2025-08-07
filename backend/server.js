const express = require("express")
const dotenv = require("dotenv").config()
const app =express()

const api = process.env.API_URL
//middleware
app.use(express.json())

//routes
app.get(`${api}/products`,(req, res)=>{
    const product = {
        id: 1,
        name: "Pizza",
        image:"Some_Url",
    }
    res.send(product)
})
app.post(`${api}/products`,(req, res)=>{
    const newproduct = req.body;
    console.log(newproduct);
    res.send(newproduct)
})



app.listen(5000, ()=>{
    console.log(api);
    
    console.log(`Server Running 5000`);
    
})