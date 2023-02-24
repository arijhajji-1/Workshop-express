const express = require('express');

const router = express.Router();
 const User = require('../models/user');
 const userController = require ("../Controller/userController");

router.get('/show',(req,res,next)=>{
    res.send('User Page');
});


// router.get("/add/:name/:email/:cin", (req, res, next) => {
//     console.log("Notre data : " + JSON.stringify(req.params))
//     new User(
//         {name : req.params.name,
//         email : req.params.email,
//         cin : req.params.cin}
//     ).save((err, data) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log(data)
//         res.send(data);
//     })

// })



router.post("/new", )

router.get("/getall", userController.getall );
router.get("/find/:id", )

router.delete("/delete/:id", )

router.put('/update/:id', )


module.exports = router;