// var express = require('express');
var user=require('../Models/usermodel');
var storage = require('node-persist');
storage.init();
var login_status=0;
exports.index=async(req,res)=>{
    // var data="ejs";
    var user_id=await storage.getItem('user_id');
    console.log("User ID From Storage : ",user_id);
    if(user_id==undefined)
    {
        res.redirect('/login');
    }
    var data=await user.find();
    res.render("index",{data});
}

exports.insert=async(req,res)=>{
    user.create(req.body);
    // res.redirect('/');
    res.status(200).json({
        status:"success"
    })
}

exports.get_data=async(req,res)=>{
    // var limit=3;
    // var total_data=await user.find().countDocuments();
    // var page_no=req.query.page_no;
    // if(page_no==undefined)
    // {
    //     page_no=1;
    // }
    // var start=(page_no-1)*limit;
    // var total_page=Math.ceil(total_data/limit);
    // var data=await user.find().skip(start).limit(limit);
    var data=await user.find();
    res.status(200).json({
        status:"success",
        data
        // page_no,
        // total_page
    })
}

exports.delete=async(req,res)=>{
    var id=req.params.id;
    var data=await user.findByIdAndDelete(id);
    res.status(200).json({
        status:"Success Delete"
    })
}

exports.get_update=async (req,res)=>{
    var id=req.params.id;
    var data=await user.findById(id);
    res.status(200).json({
        status:"Success Get Update",
        data
    })
}

exports.update=async(req,res)=>{
    var id=req.params.id;
    var data=await user.findOneAndUpdate(id,req.body);
    res.status(200).json({
        status:"Success Update"
    })
}

exports.login=async(req,res)=>{
    // var email=req.body.email;
    // var password=req.body.password;
    // if(!email||!password)
    // {
    //     res.status(200).json({
    //         status:"Email and password are not added"
    //     });
    // }
    // var data=await user.find({"email":email});
    // if(!data)
    // {
    //     return res.status(200).json({
    //         status:"Invalide Email"
    //     });
    // }
    // var dataP=await user.find({"password":password});
    // if(!dataP)
    // {
    //     return res.status(200).json({
    //         status:"Invalide Password"
    //     });
    // }
    // var user_id=await Storage.getItem('user_id');
    // if(user_id){
    //     res.status(200).json({
    //         status:"User is already login"
    //     });
    // }
    // await Storage.setItem('user_id',data.id);
    // res.status(200).json({
    //     status:"Login Success"
    // });
    var data=await user.find({"email":req.body.email});
    if(login_status==0)
    {
        if(data.length==1)
        {
            if(data[0].password==req.body.password)
            {
                await storage.setItem('user_id',data[0].id);
                login_status=1;
                res.status(200).json({
                    status:"successfully login"
                })
            }else
            {
                res.status(200).json({
                    status:"check your email and password"
                })
            }
        }else
        {
            res.status(200).json({
                status:"check your email and password"
            })
        }
    }else
    {
        res.status(200).json({
            status:"user is already login"
        })
    }
}