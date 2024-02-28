var express = require('express');
var router = express.Router();
const User = require('../models/user.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req,res)=>{
  const user = req.body;
  if(user.username && user.password && user.email){
    res.json({
      status: 'ok',
      status_Code:200,
      message: 'login success',
      data: '',
    })
  }else{
    res.json({
      status: 'ok',
      status_Code:200,
      message: 'login failed',
      data: '',
    })
  }
})

router.post('/register', async function(req,res){
  const body = req.body;
  if (body.password !== body['confirm-password']) {
    errors.push({'confirm-password': 'Password don\'t match !!!'});
  }

  const user = await User.findOne({ email: body.email });
  if (user) {
    errors.push({'email': 'User already exist, please change !!!'});
  }

})

module.exports = router;
