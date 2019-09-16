
import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Geosuggest from 'react-geosuggest';

 
export default class GeoSuggestTest extends React.Component {
 

  
 
  render() {
    var fixtures = [
        {label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
        {label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
        {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
      ];
    return (
        <div>
      <Geosuggest
          ref={el=>this._geoSuggest=el}
          placeholder="Start typing!"
          initialValue="Hamburg"
          fixtures={fixtures}
          onSuggestSelect={this.onSuggestSelect}
          radius="20" />

        <button onClick={()=>this._geoSuggest.focus()}>Focus</button>
        <button onClick={()=>this._geoSuggest.update('New Zealand')}>Update</button>
        <button onClick={()=>this._geoSuggest.clear()}>Clear</button>
        <button onClick={()=>this._geoSuggest.selectSuggest()}>Search</button>
        </div>
    );
  }
}
