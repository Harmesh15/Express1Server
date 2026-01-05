const express = require("express");
const router = express.Router();

const students = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
{ id: 3, name: "Charlie" }
];

router.get("/",(req,res)=>{
    let names = students.map(item=>item.name).join(", ");
     res.send(`Students: ${names}`);
})

router.get("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    let user =  students.find(u=>u.id==id);

    if(!user){
         res.send("Student not found");
    }else{
        res.send(`Student: ${user.name}`);
    }
})


module.exports = router;