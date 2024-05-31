import mongoose , {Schema} from "mongoose";
import {aggregatePaginate} from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile:{
        type:String,
        required:true,
    },
    thumbNail:{
        type:String,
        required:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        required:true,
        default:0
    },
    isPublished:{
        type:Boolean,
        required:true
    }

},{timestamps:true});

videoSchema.plugin(aggregatePaginate);

export const video = mongoose.model("Video",videoSchema)