const Transaction = require("../models/Transacationmodel");
const Product = require("../models/productmodel");

exports.placeOrder = async(req,res) => {
    try{
        // console.log(req.user)
        // req.body.userId=req.user._id;
        let foundProduct = await Product.findOne({_id:req.body.productId});
        let grandTotal=0
        if(req.body.isDelivery) {
            grandTotal = 40 + foundProduct.price;
        } else {
            grandTotal = foundProduct.price;
        }
        req.body.grandTotal = grandTotal;
        let placeOrder = await Transaction.create(req.body);
        if(placeOrder) {
            res.send({status:true, message:"order placed", data:placeOrder});
        } else {
            res.send({status:false, message:"order not placed", data:{}});
        }
    } catch(e) {
        console.log(e)
        res.send({status:false, message:"error occurred"});
    }
}