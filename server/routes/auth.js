const express  = require('express')

const router = express.Router()
const {signup,login,logout}  = require('../controllers/authController')

// @ /api/auth/resister 
router.post('/register',signup);



// @ /api/auth/login 
router.post('/login', login);



// @ /api/auth/logout 
router.get('/logout', logout);

module.exports = router