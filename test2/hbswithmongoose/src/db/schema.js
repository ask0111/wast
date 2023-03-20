require('dotenv').config()
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    },
    tokens: [{ 
        token: {
        type: String,
        required: true
    }}]
})

// console.log(process.env.SECRET_KEY)

schema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id: this._id.toString()}, process.env.SECRET_KEY);
        // console.log(token, this)
        this.tokens = this.tokens.concat({token: token})
        await this.save();
        // console.log(token, this)
        return token;
    } catch (error) {
        console.log(error);
    }
}

schema.pre('save', async function(next){
    console.log(`Before hashing password ${this.password}`)
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`after hashing password ${this.password}`)
    next();
})

const UserCollection = new mongoose.model('userCollection', schema);

module.exports = UserCollection;