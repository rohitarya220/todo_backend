const User = require("../../Model/user");
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    try {
        // const { email, password, username } = req.body;
        // console.log(req.body)

        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ message: 'Email and Password are required' });
        }

        const existingUser = await User.findOne({ email: req.body.email });

        if (existingUser) {
            return res.status(203).json({ message: 'User already registered' });
        }

        let password = req.body.password;

        const hashedPassword = await bcrypt.hash(password, 10);

        req.body.password = hashedPassword;

        const newUser = await User.create(req.body);

        // console.log('user created', newUser);

        return res.status(200).json({ message: 'User registered successfully', newUser });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = registerUser;