const mongoose = require("mongoose");


const TransactionSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User" 
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    isDelivery:{
        type:Boolean,
        default:false
        
    },
    deliveryCharge:{
        type:Number,
        default:0
    },
    deleveryDate:{
     type:Date,
    },
    grandTotal:{
       type:Number,
       default:0
    },
    status:{
      type:String,
      enum:["confirmed","canceled","shipping","delivered","pending"],
      default:"pending"
    }
},  
{
    timestamps:true
});

module.exports = mongoose.model("Transaction",TransactionSchema,"Transaction");