const { default: mongoose } = require("mongoose");


const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
        unique: true
    },
    age: {
        type: Number,
        required: true,
        default: 0
    },
    course:{
        type: String,
        enum: ['Hindi', 'English', 'Math'],
        required: true
    }
})


module.exports = schema;