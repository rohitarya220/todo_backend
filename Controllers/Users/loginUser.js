const userModel = require("../../Model/user");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email })

        if (!user) return res.status(404).json({ message: 'user not found' });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(404).json({ message: 'invalid credentials' });

        const token = jwt.sign({ userId: user._id, username: user.username, role: user.role }, 'JWT_SECRET')

        res.status(201).json({ message: 'user logged in', token });
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = loginUser;