// const fs = require("fs");
// const path = require("path");

const getallproducts=(req,res)=>{
    return "Fetching all products";
}

const getProductById=(req,res)=>{
    const id = req.params.id;
    return `Fetching product with ID: ${id}`;
}


const addnewProduct=(req,res)=>{
    return "Adding a new product";
}

module.exports = {
    getallproducts,
    getProductById,
    addnewProduct
}