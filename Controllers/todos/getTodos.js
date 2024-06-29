const todoModal = require("../../Model/todo");

const getTodos = async(req, res) =>{
    try {
        const todos = await todoModal.find()

        res.status(200).json({data: todos})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = getTodos;