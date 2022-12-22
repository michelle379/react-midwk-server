const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema=new Schema({
    id:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    store_avatar:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    hour:{
        type:String,
        required:true
    },
    MoreInfo:{
        type:String,
        required:true
    },
}, {
    timestamps: true,
  })

const Product= mongoose.model("Product",productSchema);
module.exports=Product;