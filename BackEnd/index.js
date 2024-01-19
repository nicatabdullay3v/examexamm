const express = require("express");
const app = express();
const port = 3000;
const productsRouter = require("./src/routers/ProductsRouter");
const cors = require("cors")
app.use(cors());
app.use(express.json());
const dbConnect = require("./src/config/db");
dbConnect();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/", productsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
