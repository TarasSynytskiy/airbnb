import ReactMapGL, {Marker,Popup} from 'react-map-gl';
import * as React from 'react';
import getCenter from 'geolib/es/getCenter';

function Map({searchResults}) {

  const [selectedLocation, setSelectedLocation] = React.useState({});

      const coordinates = searchResults.map(result => ({
        longitude : result.long ,
        latitude : result.lat, 
      }));
    const center = getCenter(coordinates)
    const [viewport, setViewport] = React.useState({
      width:"100%",
      height:"100%",
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 11
    });
      return (
        <ReactMapGL
    
          mapStyle='mapbox://styles/tarasboxmap/cku3yy62g0s5118o25sdh044r'
          mapboxApiAccessToken={process.env.mapbox_key}
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          >
            {searchResults.map(result => (
              <div key={result.long}>
              <Marker
              latitude={result.lat}
              longitude={result.long}
              offsetLeft={-20}
              offsetLeft={-10}
              >
            <p 
            role='img'
            onClick={() => setSelectedLocation(result)}       
            className='cursor-pointer text-2xl animate-bounce'
            aria-lable='push-pin'>🏘</p>
              </Marker>

              {selectedLocation.long === result.long ? (
                <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={true}
                latitude={result.lat}
                longitude={result.long}>
                  {result.title}
                </Popup>
              ):(
                false
              )}
            </div>
            ))}
            
        </ReactMapGL>
      );
    }

export default Map
