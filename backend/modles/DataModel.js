import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    end_year:{
        type:String,
    },
    intensity:{
        type:Number,
        required:true
    },
    sector:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },

    insight:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    region:{
        type:String,
        required:true
    },
    start_year:{
        type:String,
    },
    impact:{
        type:String,
    },
    added:{
        type:String,
    },
    published:{
        type:String,
    },
    country:{
        type:String,
    },
    relevance:{
        type:Number,
        required:true
    },
    pestle:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    likelihood:{
        type:Number,
        required:true
    }
})
const Data = mongoose.model('Data',DataSchema);
export default Data;