const mongoose = require('mongoose')
// schema
const productSchema = mongoose.Schema(
    {
    name:{
        type: String,
        required:[true, "Please enter name of product"]
    },
    image:{
        type:String,
        required: true,
        default: false
    },
    countInStock:{
        type: Number,
        required: true,
        default: false
    },
    },
    {
        timestamps:true
    }
)

// model
const Product = mongoose.model("Product", productSchema)

module.exports = Product