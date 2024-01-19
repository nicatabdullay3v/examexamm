const mongoose = require("mongoose")

const productsSchema = mongoose.Schema({
        name:String,
        description:String,
        price:Number,
        like:Number,
        rating:Number,
        category:String,
        img:String


})

const Products = mongoose.model("Products",productsSchema)

module.exports = Products
