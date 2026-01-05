const express = require("express");
const router = express.Router();



router.get("/",(req,res)=>{
     res.send("Fetching all users");
})

router.get("/:Id",(req,res)=>{
   const Id = req.params.Id;
  res.send(`Fetching user with ID: id,${Id}`);

//    const id = parseInt(req.params.Id);

//   let couseId =  courses.find(c=>c.id==id);
//   if(!couseId){
//        res.send("Course not found");
//      }else{
//         res.send(`Course: ${couseId.name}, Description: ${couseId.description}`);
//      };
})

router.post("/",(req,res)=>{
   res.send("Adding a new user");
})

module.exports = router;