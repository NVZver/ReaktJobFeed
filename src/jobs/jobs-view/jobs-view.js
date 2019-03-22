import React, {Component} from 'react';
import {LeafletMap} from '../../leaflet/leaflet-map';

import './jobs-view.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export class JobsView extends Component {

    constructor(props){
        super(props);

        this.jobApply = this.jobApply.bind(this);
        this.jobSave = this.jobSave.bind(this);
        this.jobDelete = this.jobDelete.bind(this);
    }

    jobApply() {
        if(typeof this.props.onJobApply === 'function'){
            this.props.onJobApply(this.props.job_title);
        }
    }

    jobSave() {
        if(typeof this.props.onJobSave === 'function'){
            this.props.onJobSave(this.props.job_title);
        }
    }

    jobDelete() {
        if(typeof this.props.onJobDelete === 'function'){
            this.props.onJobDelete(this.props.job_title);
        }
    }

    render(){
        return (
            <Card className="jobs-view">
                <CardHeader 
                    title={this.props.job_title}
                    subheader={this.props.organization_name}
                />

                <CardContent>
                    <LeafletMap location_coordinates = {this.props.location_coordinates} />
                </CardContent>

                <CardActions 
                    className="jobs-vew-actions">
                    <div 
                        className="jobs-view-actions--positive">
                        <Button 
                            variant="outlined"
                            color="primary">Apply</Button>                    
                        <Button>Save</Button>
                    </div>
                    <Button 
                        color="secondary"
                        onClick={this.jobDelete}>Delete</Button>                    
                </CardActions>
            </Card>
        ); 
    }
}
