const express = require("express");
const app = express();
const studentRouter = require("./router/students");
const coursesRouter = require("./router/courses");

app.use(express.json());

app.get("/",(req,res)=>{
    res.send( "Welcome to the Student & Course Portal API!");
})

app.use("/students",studentRouter);
app.use("/courses",coursesRouter);


app.listen(4000,()=>{
    console.log("server started running at 4000");
});
