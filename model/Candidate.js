const mongoose = require('mongoose')

const CandidateSchema= new mongoose.Schema({
name:{
type:String,
required:true
},
Symbol:{
type:String,
unique:true
},
likes:[
{
user:{
type:String,
}}
]
})

module.exports = Candidate = mongoose.model('Candidate',CandidateSchema);
