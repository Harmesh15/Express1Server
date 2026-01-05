const express = require("express");
const app = express();
const productRouter = require("./router/productRoutes");
const usersRouter = require("./router/userRoutes");
const cartRoute = require("./router/cartRoutes");

app.use(express.json());

app.use("/students",productRouter);
app.use("/courses",usersRouter);
app.use("/courses",cartRoute);


app.listen(4000,()=>{
    console.log("server started running at 4000");
});
