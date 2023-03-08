const mongoose  = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/userdatabase', {   useNewUrlParser: true,
useUnifiedTopology: true
}).then(()=> {console.log("Conneted successfully...")}).catch((err)=>console.log(err))

// Schima is validation and type of value
const palylistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,     // we write upper case its convert in lowercase
        uppercase: true,     // we write lower case its convert in uppercase
        trim: true,          // its remove extra space in the starting and end
        minlength: [2, "minimum length 2"],      // min length should 2 its show error
        maxlingth: 30,
        enum: ["frontend", "backend", "database"]    // there will we at least one value
    },
    ctype: String,
    videos: {
        type: Number,
        validate(value){                            // CUSTOM VALIDATION
             if(value < 0){
                throw new Error("Vedio can't be negative!")
             }
        }
    },
    author: String,
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(validator.isEmail(value)){            // validator.isEmail from package
                throw new Error("Email is invalid");
            }
        }
    },
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
            videos: 50,
            author: "HY",
            activate: true
        });

        const hPlaylist = new Playlist({
            name: "frontend",
            ctype: "html",
            videos: 150,
            author: "HY",
            activate: true
        });
        const cPlaylist = new Playlist({
            name: "frontend",
            ctype: "css",
            videos: 20,
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
    // const result = await Playlist.find({name: "frontend"}).limit(2);

    // Comparsion operator
    // const result = await Playlist.find({vedio: {$lte: 50}}).limit(2);
    // const result = await Playlist.find({name: {$in: ["frontend", "back end"]}});   // whose name is frontend and back end show all 

    // logical operator 
    // const result = await Playlist.find({name: {$or: [{name: "frontend"}, {ctype: "redux"}]}});   // whose name and ctype match show all 

    // count/countDocuments
    // const result = await Playlist.find({name: {$or: [{name: "frontend"}, {ctype: "redux"}]}}).countDocuments;   // whose name and ctype match show all in number


    const result = await Playlist.find({name: "frontend"}).select({name: 1}).sort();   // whose name  match show all in sorted order
    console.log(result)
}

getDocument();


const updateDocument = async (_id)=>{
    try{
        // const result = await Playlist.updateOne({_id}, {$set: {name: "DataBase"}})
        const result = await Playlist.findByIdAndUpdate({_id}, {$set: {name: "Database"}}, {new: true});    // new true use for updated show in console
        console.log(result)
    }
    catch(err){
        console.log(err);
    }
}



updateDocument('64048d7c08cc15c365facbf4');




const deleteDocument = async (_id)=>{

    try{
        // const result = await Playlist.deleteOne({_id});
        const result = await Playlist.findByIdAndDelete({_id});
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}



deleteDocument('64048d7c08cc15c365facbf4');