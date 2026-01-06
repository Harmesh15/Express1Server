

const getAllproduct=(req,res)=>{
     res.send("Fetching all products");
}

const getproductwithId=(req,res)=>{
     const id = req.params.id;
    res.send(`Fetching product with ID: id, ${id}`);
    // const id = parseInt(req.params.id);
    // let user =  students.find(u=>u.id==id);

    // if(!user){
    //      res.send("Student not found");
    // }else{
    //     res.send(`Student: ${user.name}`);
    // }
}

const addProduct=(req,res)=>{
     const id = req.params.id;
    res.send(`Adding a new product, ${id}`);
}

module.exports = {
    getAllproduct,
    getproductwithId,
    addProduct
}