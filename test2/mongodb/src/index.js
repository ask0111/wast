const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dummy', {   useNewUrlParser: true,
useUnifiedTopology: true
}).then(()=>{console.log("Connected mongosh...")}).catch((err)=>{console.log(err)});


const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }

})


const Collection = new mongoose.model('collection', schema);

const insertDocumnet = async ()=>{

    try{
        const result = await new Collection({
            name: "hariom Yadav"
        })
        result.save();
        // console.log(result);
    }
    catch(err){
        console.log(err);
    }

}


// insertDocumnet();


const findDocument = async (_id)=>{
    try {
        const result = await Collection.deleteOne({_id});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

findDocument('6409b02c033a75d511a54fa9');