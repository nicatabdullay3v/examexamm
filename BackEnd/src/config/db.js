const mongoose = require("mongoose")

const dbConnect = () =>{
    try {
        mongoose.connect("mongodb+srv://nicatneon:nicat@cluster0.d1auyxi.mongodb.net/?retryWrites=true&w=majority").then(()=>{
            console.log("Connected");
        })
    } catch (error) {
       console.log('error',error); 
    }
}
module.exports = dbConnect