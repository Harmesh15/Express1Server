const express = require("express");
const app = express();
const productrouter = require("./router/product");
const categoriesrouter = require("./router/categories");


app.use("/product",productrouter)
app.use("/categories",categoriesrouter)

app.listen(4000,()=>{
    console.log("server started running at 4000");
});
