import {jobs} from './jobs.mock';

class JobsService {

    deletedJobs = [];

    constuctor(){
    }

    async getJobsAsync(){
        const response = await fetch('https://us.jobfeed.com/data/info-recent-jobs', { mode: 'no-cors'});
        const data = await response.json();
        return data;
    }

    getJobs(filter){
        const jobsToDisplay = jobs.filter(job=>!this.isDeletedJob(job.job_title));
        if(!filter){
            return jobsToDisplay;
        }
        const regEx = new RegExp(filter, 'gi');
        return jobsToDisplay.filter(job=> {
            return regEx.test(job.job_title) || regEx.test(job.organization_name) 
        });
    }

    jobDelete(job_title){
        if(!this.isDeletedJob(job_title)){
            this.deletedJobs.push(job_title);
        }
    }

    isDeletedJob(job_title) {
        return this.deletedJobs.includes(job_title); 
    }

}

const instance = new JobsService();
Object.freeze(instance);

export default instance;