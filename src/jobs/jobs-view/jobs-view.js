import React, {Component} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import './jobs-view.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export class JobsView extends Component {
    lMap;
    lMarker;

    constructor(props){
        super(props);

        this.initMap = this.initMap.bind(this);
        this.addMarker = this.addMarker.bind(this);
        this.jobApply = this.jobApply.bind(this);
        this.jobSave = this.jobSave.bind(this);
        this.jobDelete = this.jobDelete.bind(this);
    }

    componentDidMount(){
        this.lMap = this.initMap(); 
        this.lMarker = this.addMarker(this.props.location_coordinates);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        this.updateMap(this.props.location_coordinates);
    }

    initMap(){
        const map = L.map('leafletMap').setView(this.props.location_coordinates, 15);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'JobsFeed',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoidHp6NTMyOTciLCJhIjoiY2p0Z3Z5MHdpMGNqOTRhcDY0cTBid3poNCJ9.SvWzZpblijbIxVt21X7aXw'
        }).addTo(map);
        return map;
    }

    addMarker(location){
        const lIcon = L.icon({
            iconUrl: 'http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Pic.png',
            shadowUrl: 'leaflet/dist/images/marker-shadow.png',
            iconSize: [20, 30],
            iconAnchor: [10, 30],
        });
        return L.marker(location, { icon: lIcon }).addTo(this.lMap);
    }

    updateMap(location){
        const latLng = L.latLng(...location);
        this.lMap.setView(latLng);
        this.lMarker.setLatLng(latLng);
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
                    <div id="leafletMap" className="job-view__map"></div>
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
