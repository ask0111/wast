const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    add: {
        type: String,
        required: true
    },
    anotheradd:{
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    check: {
        type: Boolean,
        required: true
    }
})


schema.pre('save', async function(next){
    console.log(`Before hashing password ${this.password}`)
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`after hashing password ${this.password}`)
    next();
})

const UserCollection = new mongoose.model('userCollection', schema);

module.exports = UserCollection;