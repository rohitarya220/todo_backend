const todoModal = require("../../Model/todo")

const createTodo = async (req, res) => {
    try {
        const newTodo = new todoModal(req.body)

        await newTodo.save()
        res.status(201).json({message: 'todo successfully created', newTodo})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = createTodo;