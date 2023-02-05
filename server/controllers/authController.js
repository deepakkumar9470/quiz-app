
const AuthModel  = require('../models/Auth');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



//REGISTER

module.exports.signup = async (req, res) => {
  const {name, email, password} = req.body;
  if(!name || !email || !password) {
    res.status(400).json('Please fill all fields..')
  }
  try {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password, salt)  
    const user = new AuthModel({
      name : req.body.name,
      email : req.body.email,
      password : hash,
    });
    const userSave = await user.save();
    const token = await jwt.sign(
      {_id:  userSave._id, name : userSave.name, email : userSave.email},
      process.env.JWT_SECRET_KEY
      )
    res.status(201).send(token);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}



  
// Login User
module.exports.login = async (req, res) =>{
    try {
        const user = await AuthModel.findOne({email : req.body.email});
        if(!user) return res.status(400).json('User alredy exist')
  
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if(!isMatch) return res.status(400).json('Invalid credentials')
        const token = await jwt.sign(
          {_id:  user._id, name : user.name, email : user.email},
          process.env.JWT_SECRET_KEY
          )
        res.status(200).send(token)
      } catch (e) {
        res.status(404).json({ message: error.message })
      }
}




// Get Users
module.exports.logout = (req, res) =>{    
    res.clearCookie('jwt', {path : '/'});
    res.send('User logout')
}