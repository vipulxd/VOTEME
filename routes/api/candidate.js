const express = require('express')
const router = express.Router();
const {check ,validationResult} = require('express-validator/check')
const Candidate = require('../../model/Candidate')
// this is the candidate router includes CRUD operations

// validate the candidate name , symbol

router.post('/',
[
check('name','required').not().isEmpty(),
check('symbol','required').not().isEmpty()
],
async(req,res)=>{
const error = validationResult(req)
if(!error.isEmpty()){
return res.status(400).json({error:error.array()})
}
try{

const newCad = new Candidate({
name:req.body.name,
symbol:req.body.symbol
})
newCad.save()
res.json(newCad)
}catch(error){
res.send(500).send('server error')
}
})
console.log("Please don't copy  this repo you will be hacked")
module.exports = router
