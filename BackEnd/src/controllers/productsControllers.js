const Products = require("./../models/productsModels")

const getAllProducts = async(req,res)=>{
    const allProducts = await Products.find({})
    res.send(allProducts)
}

const postProducts = async(req,res)=>{
    const postedProduct = new Products(req.body)
    postedProduct.save()
}

const deleteProduct = async(req,res)=>{
    const deleteProduct = await Products.deleteOne({_id:req.params.id})

    res.send({message:"deleted"})
}


module.exports = {
    getAllProducts,
    deleteProduct,
    postProducts
}