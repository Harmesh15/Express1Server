const express = require("express");
const router = express.Router();


const courses = [
{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
]

router.get("/",(req,res)=>{
    const cousenames = courses.map((c)=>c.name).join(', ');
     res.send(`Courses: ${cousenames}`);
})

router.get("/:Id",(req,res)=>{
   const id = parseInt(req.params.Id);

  let couseId =  courses.find(c=>c.id==id);
  if(!couseId){
       res.send("Course not found");
     }else{
        res.send(`Course: ${couseId.name}, Description: ${couseId.description}`);
     };
})


module.exports = router;