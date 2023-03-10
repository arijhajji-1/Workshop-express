const express = require("express");
const chat = require("../models/chat");
async function getall(req, res) {
    try {
      const data = await chat.find();
      res.send(data);
    } catch (err) {
      res.send(err);
    }
  }
  
  async function getbyid(req, res) {
    try {
      const data = await chat.findById(req.params.id);
      res.send(data);
    } catch (err) {
      res.send(err);
    }
  }
  
  async function add(msge) {
    try {
      const Chat = new chat({
        message: msge,
        created: new Date(),
      });
      //console.log("resultat:" + JSON.stringify(req.body));
      // console.log("resultat:" + JSON.stringify(Chat));
      console.log(new Date());
      await Chat.save();
      console.log("add success");
    } catch (err) {
      console.log({ error: error.toString() });
    }
  }
  
  module.exports = { getall, getbyid, add };