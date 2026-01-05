const express = require("express");
const app = express();


function addproperity(req,res,next){
    req.user = "Guest";
    next();

}


app.get("/welcome",addproperity,(req,res)=>{

    let getvalue = req.user;
    res.send(`<h1>Welcome, ${getvalue}</h1>`);
    
})

app.listen(3000,()=>{
    console.log("server stated running at 3000")
});