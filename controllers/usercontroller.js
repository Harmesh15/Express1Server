

const getallusers=(req,res)=>{
     res.send("Fetching all users");
}

const getuserById=(req,res)=>{
   const Id = req.params.Id;
  res.send(`Fetching user with ID: id,${Id}`);

//    const id = parseInt(req.params.Id);

//   let couseId =  courses.find(c=>c.id==id);
//   if(!couseId){
//        res.send("Course not found");
//      }else{
//         res.send(`Course: ${couseId.name}, Description: ${couseId.description}`);
//      };
}

const addnewUser = (req,res)=>{
   res.send("Adding a new user");
}


module.exports = {
      getallusers,
      getuserById,
      addnewUser
}