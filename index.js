const express = require("express");
const app = express();


app.get("/welcome/:username",(req,res)=>{
    const user = req.params.username;
    const role = req.query.role || "Guest"; // default value dene se undefined ni dega agr role ni diya to
    res.send(`Welcome ${user}, your role is ${role}`);
})


app.listen(4000,()=>{
    console.log("server started running at 4000");
});
