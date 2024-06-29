const todoModal = require("../../Model/todo")

const updateTodo = async (req, res) => {
    const {id} = req.params
    try {
        await todoModal.findByIdAndUpdate(id, req.body)

        res.status(201).json({message: 'todo updated successfully'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = updateTodo