const mongoose = require('mongoose')


const QuestionSchema = new mongoose.Schema({
    questions  : {
        type: Array,
        default   : []
    },
    answers  : {
        type: Array,
        default   : []
    },
    
    createdAt  : {
        type: Date,
        default: Date.now
        
    },
   
});



module.exports = mongoose.model('Question', QuestionSchema)
