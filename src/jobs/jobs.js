import React, {Component} from 'react';
import {JobsList} from './jobs-list/jobs-list';
import {JobsView} from './jobs-view/jobs-view';
import './jobs.scss';

export class Jobs extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedJob: undefined
        };
        this.handleJobSelect = this.handleJobSelect.bind(this);
        this.createJobsView = this.createJobsView.bind(this);
    }

    handleJobSelect(job){
        this.setState({
            selectedJob: job
        }); 
    }

    createJobsView(){
        let result = (<div></div>);
        const job = this.state.selectedJob;
        if(job){
            result = (
                <JobsView 
                    className="jobs-view"
                    job_title = {job.job_title}
                    organization_name = {job.organization_name}
                    location_coordinates = {job.location_coordinates}
                />
            );
        }
        return result;
    }

    render(){
        return (
            <div className="jobs">
                <JobsList  
                    onClick={this.handleJobSelect}
                />
                { this.createJobsView() }
            </div>
        );
    }
}