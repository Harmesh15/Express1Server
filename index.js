const express = require("express");
const app = express();
const productrouter = require("./router/books");

app.use(express.json());

app.use("/books",productrouter);

app.listen(4000,()=>{
    console.log("server started running at 4000");
});
