const Transaction = require("../models/Transacationmodel");
const Product = require("../models/productmodel");

exports.placeOrder = async(req,res) => {
    try{
        req.body.userId=req.user._id;
        let foundProduct = await Product.findOne({_id:req.body.productId});
        let quantity=0
        if(foundProduct.quantity>req.body.quantity){
        quantity=foundProduct.quantity-req.body.quantity;
        let grandTotal=0
        if(req.body.isDelivery) {
            req.body.deliveryCharge=40
            grandTotal = 40 + foundProduct.price;
        } else {
            grandTotal = foundProduct.price;
        }
        
        req.body.grandTotal = grandTotal;
        let placeOrder = await Transaction.create(req.body);
        if(placeOrder) {
           await Product.findOneAndUpdate({_id:req.body.productId},{quantity:quantity});
            res.send({status:true, message:"order placed", data:placeOrder});
        } else {
            res.send({status:false, message:"order not placed", data:{}});
        }
    }else{
        res.send({status:false,message:"product out of stock"})
    }
    } catch(e) { 
        console.log(e)
        res.send({status:false, message:"error occurred"});
    }
}


exports.OrderStatus = async(req,res) => {
    try{
        await Transaction.findOneAndUpdate({_id:req.body.TransactionId},{status:req.body.status});
        let found = await Transaction.findOne({_id:req.body.TransactionId});
        res.send({status:true, message:"Order status updated", data:found});
    }catch(e) {
        console.log(e)
        res.send({status:false, message:"error occurred"});

    }
}


