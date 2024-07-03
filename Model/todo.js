const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {type : String, required: true},
    description : {type : String, required: true},
    createdAt: {type : Date, default: Date.now()},
    userId: {type: String}
})

const todoModal = mongoose.model('Todo', todoSchema)

module.exports = todoModal;