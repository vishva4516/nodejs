// var express = require('express');
var user=require('../Models/usermodel');
exports.index=async(req,res)=>{
    // var data="ejs";
    var data=await user.find();
    res.render("index",{data});
}
exports.insert=async(req,res)=>{
    // user.create(req.body);
    // res.redirect('/');
    res.status(200).json({
        status:"success"
    })
}

exports.get_data=async(res,req)=>{
    var data=await user.find();
    res.status(200).json({
        status:"success",
        data
    })
}

exports.delete=async(req,res)=>{
    var id=req.params.id;
    var data=await user.findByIdAndDelete(id);
    res.status(200).json({
        status:"success Delete"
    })
}