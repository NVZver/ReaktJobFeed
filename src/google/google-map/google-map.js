import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
      width: '100%',
      height: '100%'
};

export class GoogleMap extends Component {
      render() {
              return (
                <Map
                      google={this.props.google}
                      zoom={14}
                      style={mapStyles}
                      initialCenter={{
                           lat: this.props.lat,
                           lng: this.props.lng
                      }}
                    />
              );
            }
}

export default GoogleApiWrapper({
      apiKey: 'AIx5_fCk71wCWFEzi_s3p24PVpfuyt0x3wg'
})(GoogleMap);
