const Question = require('../models/Question')
const Result = require('../models/Result')
const {answers,questions} = require('../db/data2')

module.exports.getQuestions = async (req,res) =>{
   try{
       const q = await Question.find()
       res.json(q)
   }catch(err){
         res.json({err})
   }
}


module.exports.insertQuestions = async (req,res) =>{
    try{
        Question.insertMany({questions : questions, answers : answers}, (err,data)=>{
            res.json({msg  :'Question Data saved successfully..'})
        })
    }catch(err){
        res.json({err})
     
    }
 }

 module.exports.dropQuestions = async (req,res) =>{
    try{
        await Question.deleteMany()
        res.json({msg : 'Questions data has been deleted..'})
    }catch(err){
        res.json({err})
    }
 }


 module.exports.getResult = async (req,res) =>{
    try{
        const r = await Result.find()
        res.json(r)
 
    }catch(err){
        res.json({err})
    }
 }

 module.exports.insertResult = async (req,res) =>{
    const {username,result,attempts,points,achived} = req.body
    if(!username && !result) throw new Error('Data not provided')

    try{
         Result.create({username,result,attempts,points,achived}, (err,data)=>{
            res.json({msg : 'Result data saved successfully..'})
         })
        
 
    }catch(err){
        res.json({err})
    }
 }

 module.exports.dropResult = async (req,res) =>{
   
    try{
        await Result.deleteMany()
        res.json({msg : 'Result data has been deleted..'})
 
    }catch(err){
        res.json({err})
    }
 }
