const { default: mongoose } = require("mongoose");
const schema = require('./schema');


const Collection = new mongoose.model('collection', schema);

module.exports = Collection;