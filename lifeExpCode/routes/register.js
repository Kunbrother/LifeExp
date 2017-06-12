var express = require('express');
var router = express.Router();

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'register',err:'' });
});

router.post('/', function(req, res, next) {
  var uname=req.body.username;
  var upassword=req.body.password;
  var info="";

  if (uname=="" || upassword==""){info+="用户名或密码不能为空。";}
  if (upassword!=req.body.password2){info+="两次输入密码不一致！请重新填写。";}

  res.render('register', { title: 'register',err:info });
});

module.exports = router;
