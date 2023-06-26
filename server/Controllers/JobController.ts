import { Request, Response } from 'express';
import JobModel from '../Models/JobModel';
import { IJob } from '../IJob';
import { ObjectId } from 'mongodb';

const queryString = require('querystring');
const JobController={

    getAllJobs:async(req:Request,res:Response)=>{
        try {
            const jobs = await JobModel.find();;
            res.json(jobs);
        } catch (err) {
            console.error(err);
            res.status(500).json({ err: 'Error geting jobs!' });
        }
    },

    addJob: async (req: Request, res: Response) => {
        const newJob: IJob = req.body;
        try {
            const job = await JobModel.create(newJob);
            res.json(job);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteJob: async (req: Request, res: Response) => {
        try {
            console.log(req.query);
            const { id } = req.query;
            const deleted: IJob | null = await JobModel.findByIdAndRemove(id);
            res.json(deleted);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    },

    updateJob: async (req: Request, res: Response) => {
        const { id } = req.query;
        const newJob: IJob = req.body;
        try {
            let changeMe: IJob | undefined | null = await JobModel.findByIdAndUpdate(id, newJob);
            res.json(changeMe);
        } catch (e: any) {
            res.status(400).json({ message: e.message });
        }
    },
    getJobById: async (req: Request, res: Response) => {
        const { id } = req.query;
        try {
            const job = await JobModel.findById(id);
            res.json(job);
        } catch (error) {
            res.status(500).json({ error: 'Error getting job' });
        }
    }
}
export default JobController;