import express from 'express';
import JobController  from "../Controllers/JobController";

const JobsRouter=express.Router();

JobsRouter.get("/getJobs",JobController.getAllJobs);
JobsRouter.get("/getJobById",JobController.getJobById);
JobsRouter.post("/addJob",JobController.addJob);
JobsRouter.delete("/deleteJob",JobController.deleteJob);
JobsRouter.put("/updateJob",JobController.updateJob);

export default JobsRouter;