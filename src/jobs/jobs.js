import React, {Component} from 'react';
import {JobsFilterInput} from './jobs-filter-input/jobs-filter-input';
import {JobsList} from './jobs-list/jobs-list';
import {JobsView} from './jobs-view/jobs-view';
import {default as JobsService} from './jobs.service';
import './jobs.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class Jobs extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedJob: undefined,
            jobs: [],
            filter: ''
        };
        this.handleJobSelect = this.handleJobSelect.bind(this);
        this.handleJobDelete = this.handleJobDelete.bind(this);
        this.createJobsView = this.createJobsView.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount(){
        this.getJobs();
    }

    getJobs(filter = this.state.filter){
        const jobs = JobsService.getJobs(filter);
        this.setState({jobs});
    }

    handleJobSelect(job){
        this.setState({
            selectedJob: job
        }); 
    }

    handleJobDelete(job_title){
        JobsService.jobDelete(job_title);
        this.getJobs();
        this.setState({ selectedJob: undefined });
    }

    handleFilterChange(filter){
        this.setState({filter});
        this.getJobs();
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
                    onJobDelete = {this.handleJobDelete}
                />
            );
        }
        return result;
    }

    render(){
        return (
            <div className="jobs">
                <Card className="jobs-list-wrapper">
                    <CardContent className="jobs-list">
                        <JobsFilterInput
                            onChange={this.handleFilterChange}
                        />
                        <JobsList  
                            jobs={this.state.jobs}
                            onClick={this.handleJobSelect}
                        />
                    </CardContent>
                </Card>
                { this.createJobsView() }
            </div>
        );
    }
}