const todoModal = require("../../Model/todo");

const deleteTodo = async (req,res) => {
    const {id} = req.params;

    try {
        await todoModal.findByIdAndDelete(id)

        res.status(203).json({message: 'todo deleted successfully'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = deleteTodo 