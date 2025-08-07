const express = require("express")
const { default: mongoose } = require("mongoose")
const dotenv = require("dotenv").config()
const morgan = require("morgan") // a middleware library
const connectDB = require("./config/connectDB")
const app =express()

const api = process.env.API_URL
//middleware
app.use(express.json())
app.use(morgan('tiny'))

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

const PORT = process.env.MONGO_URI || 5000
//setting the connection with the mongodb 
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        connectDB()
        app.listen(PORT, ()=>{
        console.log(api);
    
        console.log(`Server Running 5000`);
    
        })
    })
    .catch(err=>console.log(err)) 

