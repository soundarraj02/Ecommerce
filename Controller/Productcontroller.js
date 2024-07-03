const Product = require("../models/productmodel")

exports.product_create = async function (req, res) {
    let added = await Product.create(req.body);
    res.send({status:true, message:"Product added", data:added});
}
exports.product_details = async function (req, res) {
        let skip = 0
        let limit = req.query.limit
        let page = req.query.page
        if (page != 1) {
            skip = (page - 1) * parseInt(limit)
        }
    let found = await Product.find({name:{ $regex: req.query.searchQuery, $options: "i" },category:req.query.categoryId,price:{$gt:0,$lt:100}})
    .skip(skip).limit(limit).sort({createdAt:-1});
    let sortedArray;
    if(req.query.priceVariant) {
    if(req.query.priceVariant=="lowtohigh") {
         sortedArray =  found.sort((a,b)=>a.price - b.price);
    } else if (req.query.priceVariant=="hightolow") {
         sortedArray =  found.sort((a,b)=>b.price - a.price);
    }
 } else {
    sortedArray=found
 } 
   
    res.send({status:true, message:"Product List", data:sortedArray})
}
exports.product_update = async function (req, res) {
    let update = await Product.findOneAndUpdate({_id:req.query.id},req.body);
    let found = await Product.findOne({_id:req.query.id});
    res.send({status:true,message:"product update",data:found});
};
exports.deleteproduct = async(req,res) => {
    try{
        let deleted = await Product.deleteOne({_id:req.query.id});
        if(deleted.deletedCount>0) {
            res.send({status:true, message:"Product deleted"});
        } else {
            res.send({status:false, message:"Product not deleted"});
        }
    } catch(e) {
        res.send({status:false, message:"error occurred"});
    }
}