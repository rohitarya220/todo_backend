const registerUser = require('../Controllers/Users/registerUser');
const loginUser = require('../Controllers/Users/loginUser')
const multer = require('multer');
const request = multer();
const userRoutes = require('express').Router();

userRoutes.post('/register', request.any(), registerUser)
userRoutes.post('/login', loginUser)

module.exports = userRoutes;