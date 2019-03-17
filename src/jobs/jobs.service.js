import {jobs} from './jobs.mock';

export class JobsService {

    constructor(){
        console.log('JobsService contructor', this);
        console.log(jobs);
    }

    async getJobsAsync(){
        const response = await fetch('https://us.jobfeed.com/data/info-recent-jobs', { mode: 'no-cors'});
        const data = await response.json();
        return data;
    }

    getJobs(filter){
        if(!filter){
            return jobs;
        }
        const regEx = new RegExp(filter, 'gi');
        return jobs
                .filter(job=> regEx.test(job.job_title) || regEx.test(job.organization_name))
    }

}