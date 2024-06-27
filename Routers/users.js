const registerUser = require('../Controllers/Users/registerUser');
const loginUser = require('../Controllers/Users/loginUser')

const userRoutes = require('express').Router();

userRoutes.post('/register', registerUser)
userRoutes.post('/login', loginUser)

module.exports = userRoutes;