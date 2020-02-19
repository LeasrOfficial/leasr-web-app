import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component {
  render() {
    return (
      <div style={{ position: 'relative', height: '91vh' }}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
          lat: 37.349829,
          lng: -121.938955
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAKfJ8YTpNS5trRgKEy8Jj1XxiYCPBBYBM"
})(MapContainer);