// const mongoose = require('mongoose')
// require('dotenv/config')

// const mongoUrl = process.env.MONGODB_URI;

// const connectToMongo = async () => {
//     try {
//         await mongoose.connect(mongoUrl)
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.log('Error connecting to MongoDB:', error.message);
//     }
// }

// module.exports = connectToMongo;



const mongoose = require('mongoose')

const connection = (uri) => mongoose.connect(uri)

 module.exports = connection