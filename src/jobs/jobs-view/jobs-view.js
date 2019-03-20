import React, {Component} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import './jobs-view.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';


export class JobsView extends Component {
    lMap;
    lMarker;

    constructor(props){
        super(props);

        this.initMap = this.initMap.bind(this);
        this.addMarker = this.addMarker.bind(this);
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
            </Card>
        ); 
    }
}
