const userModel = require("../../Model/user");
const bcrypt = require('bcrypt')

const registerUser = async (req, res) => {

    const {username, password, email, role} = req.body;

    try {
        const existingUser = await userModel.findOne({email})

        if(existingUser){
            return res.status(203).json({message: 'user already registered'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new userModel({
            username, 
            password: hashedPassword,
            email, 
            role
        })
        await newUser.save()

        return res.status(201).json({message: 'user registered successfully', newUser})
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}


module.exports = registerUser