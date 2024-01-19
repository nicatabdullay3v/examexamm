const productsRouter = require("express").Router()
const ProductsController = require("./../controllers/productsControllers")


productsRouter.get("/products",ProductsController.getAllProducts)
productsRouter.delete("/products/:id",ProductsController.deleteProduct)
productsRouter.post("/products",ProductsController.postProducts)

module.exports = productsRouter