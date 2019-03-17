
import React from 'react';
import './jobs-view.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import {GoogleMap} from '../../google/google-map/google-map.js';


export function JobsView(props) {
    return (
        <Card className="jobs-view">
            <CardHeader 
                title={props.job_title}
                subheader={props.organization_name}
            />

            <CardContent>
                <div className="job-view__map">
                    <GoogleMap 
                        lat={props.location_coordinates[0]} 
                        lng={props.location_coordinates[1]} 
                    />
                </div>
            </CardContent>
        </Card>
    ); 
}

