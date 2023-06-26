import { IJob } from "../IJob";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const JobsSchema = new mongoose.Schema({ //<IJob>
    // id: {
    //     type: Number,
    //     required: true
    // },
    // name: {
    //     stype: String,
    //     required: true
    // },
    // location: {
    //     type: String,
    //     required: false
    // },
    // companyDescription: {
    //     type: String,
    //     required: false
    // },
    // jobDescription: {
    //     type: String,
    //     required: true
    // },
    // requierments: {
    //     type: [String],
    //     required: true
    // },
    // status: {
    //     type: Boolean,
    //     required: true
    // },
    // date: {
    //     stype: Date,
    //     required: true
    // },
    "id":Number,
    "name":String,
    "location":String,
    "companyDescription":String,
    "jobDescription":String,
    "requierments":[String],
    "status":Boolean,
    "date":String
});

export default mongoose.model('JobModel', JobsSchema);