/**
 * Created by Bismah Qadri on 3/14/2018.
 */
var express = require('express');
var router = express.Router();
var user = require('./../modals/user');
router.post('/',function (req, res) {
    console.log("________________________")
    console.log(req.body)
    console.log("________________________")
    let data = req.body
    user.create(data).then(function (response) {
        if (response) {
            console.log("success")
            res.send("success")
        } else{
            res.send("error")
        }
    }).catch(function (err) {
        res.send("error")
    })
});
router.get('/userData',function (req, res) {
   user.findAll().then((response)=>{
       res.send(response);
   })
});
module.exports = router;