const express  = require('express')

const router = express.Router()
const {insertQuestions,getQuestions,dropQuestions,getResult,insertResult,dropResult}  = require('../controllers/quizController')

// @ /api/resister 
router.post('/question',insertQuestions);

// @ /api/question 
router.get('/question', getQuestions);

// @ /api/question 
router.delete('/question', dropQuestions)

// @ /api/result 
router.post('/result', insertResult)
router.get('/result', getResult)
router.delete('/result', dropResult)


 


module.exports = router