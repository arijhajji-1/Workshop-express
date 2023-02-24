


const express = require('express');
const user = require('../models/user');
const router = express.Router();
const User = require('../models/user');


async function add(req, res, next) {
    console.log("dddd"  + req.body  )
    try { 
        const user = new User(req.body);
       await user.save()
        res.send('added successfully') 
    } catch(err) {
        console.log(err) 
    }
}
async function getall(req, res, next)  {
    try {
     const data=  await User.find();
            res.send(data)
       
    } catch (err) {
        console.log(err)
    }
}
async function findbyId(req, res, next)  {
    try {
     const data=  await User.findById(req.params.id);
            res.send(data)
       
    } catch (err) {
        console.log(err)
    }
}
async function deletebyid(req, res, next) {
    try {
        await User.findByIdAndRemove(req.params.id)
        res.send("user deleted")
    } catch (err) {
        console.log(err)
    }
}
async function updatebyid (req, res)  {
    try {
       await user.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.send('updated successfully')

    } catch (err) {
        res.send(err) 
    }
}
module.exports = { getall
    , add
    , findbyId
    , deletebyid
    , updatebyid
}