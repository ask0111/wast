const mongoose = require('mongoose');

mongoose.connect('url', {}).then(()=>{}).catch(()=>{});

const playlistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    }

});

const Playlist = new mongoose.model('playlist', playlistSchema);

const userdata1 = new Playlist({
    name: "hariom",
    age: 39
})
const userdata2 = new Playlist({
    name: "hariom",
    age: 39
})

Playlist.insertMany([userdata1, userdata2]);


Playlist.find();