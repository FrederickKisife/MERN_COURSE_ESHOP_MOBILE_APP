const express = require("express")
const app =express()

//routes
app.get("/",(req, res)=>{
    res.send("Api created")
})

const api = API_URL || 5000

app.listen(api, ()=>{
    console.log(`Server Running on port :${api}`);
    
})