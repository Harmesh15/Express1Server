const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{
     res.send("Fetching all products");
})


router.get("/:id",(req,res)=>{
     const id = req.params.id;
    res.send(`Fetching product with ID: id, ${id}`);
    // const id = parseInt(req.params.id);
    // let user =  students.find(u=>u.id==id);

    // if(!user){
    //      res.send("Student not found");
    // }else{
    //     res.send(`Student: ${user.name}`);
    // }
})


router.post("/:id",(req,res)=>{
     const id = req.params.id;
    res.send(`Adding a new product, ${id}`);
})

module.exports = router;