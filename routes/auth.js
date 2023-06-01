const express = require('express');
const userController = require('../controllers/user')
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/logout',userController.logout);
console.log(userController)
module.exports=router;

