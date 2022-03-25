const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://piyush-js:ilovejs@cluster0.qwee8.mongodb.net/buglogger?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

    console.log('MongoDB Connected')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB