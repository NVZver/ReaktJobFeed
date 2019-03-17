import React, {Component} from 'react';
import {JobsService} from '../jobs.service';
import './jobs-list.scss';

import {JobsListItem} from '../jobs-list-item/jobs-list-item';
import {JobsFilterInput} from '../jobs-filter-input/jobs-filter-input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class JobsList extends Component {

    jobsService

    constructor(props){
        super(props);
        this.state = {
            jobs: []
        }

        this.jobsService = new JobsService();
        this.getJobs = this.getJobs.bind(this);
        this.createJobsList = this.createJobsList.bind(this);
        this.handleJobClick = this.handleJobClick.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount(){
        this.getJobs();
    }

    getJobs(filter){
        const jobs = this.jobsService.getJobs(filter);
        this.setState({jobs});
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
        const job = this.state.jobs.find(item=>item.job_title === jobTitle);
        this.props.onClick(job); 
    }

    handleFilterChange(filter){
        this.getJobs(filter);
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <JobsFilterInput
                        onChange={this.handleFilterChange}
                    />
                    <div className="jobs-list">
                        {this.createJobsList(this.state.jobs)}
                    </div>
                </CardContent>
            </Card>
        );
    }
}