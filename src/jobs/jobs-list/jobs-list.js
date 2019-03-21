import React, {Component} from 'react';
import { default as JobsService} from '../jobs.service';
import './jobs-list.scss';

import {JobsListItem} from '../jobs-list-item/jobs-list-item';

export class JobsList extends Component {

    constructor(props){
        super(props);
        this.createJobsList = this.createJobsList.bind(this);
        this.handleJobClick = this.handleJobClick.bind(this);
    }


    createJobsList(jobs){
        jobs = jobs || [];
        return jobs.map((job, key)=><JobsListItem 
            key = {key}
            job_title = {job.job_title}
            organization_name = {job.organization_name}
            onClick = {this.handleJobClick}
        />);
    }

    handleJobClick(jobTitle){
        const job = this.props.jobs.find(item=>item.job_title === jobTitle);
        this.props.onClick(job); 
    }


    render() {
        return (
            <div>
                {this.createJobsList(this.props.jobs)}
            </div>
        );
    }
}