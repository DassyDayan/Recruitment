
export interface IJob {
    id:Number,
    name:String,
    location?:String,
    companyDescription?:String,
    jobDescription:String,
    requierments:[String],
    status:Boolean,
    date:Date
}