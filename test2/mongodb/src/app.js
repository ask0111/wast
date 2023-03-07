const mongoose  = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/userdatabase', {   useNewUrlParser: true,
useUnifiedTopology: true
}).then(()=> {console.log("Conneted successfully...")}).catch((err)=>console.log(err))

// Schima is validation and type of value
const palylistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    activate: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// A mongoose model is a wrapper on the Mongoose Schema.

// collection creation

const Playlist = new mongoose.model("Playlist", palylistSchema);


const createDocument = async ()=>{
    try{
        const rPlaylist = new Playlist({
            name: "fornt end",
            ctype: "react",
            videos: 0,
            author: "HY",
            activate: true
        });

        const hPlaylist = new Playlist({
            name: "frontend",
            ctype: "html",
            videos: 0,
            author: "HY",
            activate: true
        });
        const cPlaylist = new Playlist({
            name: "frontend",
            ctype: "css",
            videos: 0,
            author: "HY",
            activate: true
        });
        const rdxPlaylist = new Playlist({
            name: "frontend",
            ctype: "redux",
            videos: 0,
            author: "HY",
            activate: true
        });
        
        // use only one document insert
    //    const result = await reactPlaylist.save()

        // use for many data insert
       const result = await Playlist.insertMany([rPlaylist, hPlaylist, cPlaylist, rdxPlaylist])


       console.log(result);
    }
    catch(err){
        console.log(err)
    }
}

// createDocument();


const getDocument = async ()=>{
    // const result = await Playlist.find();
    const result = await Playlist.find({name: "frontend"}).limit(2);
    console.log(result)
}

getDocument()