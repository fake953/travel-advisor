import GoogleMapReact from 'google-map-react';

export const Map=({setCoordinets,setBounds,coordinets})=>{
  return (
    <div style={{ height: '87vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDnbwMkPO_41VTpV_MKAk9rrUbI86wCxZo" }}
        defaultCenter={coordinets}
        defaultZoom={14}
        onChange={(e)=>{
          setCoordinets({lat:e.center.lat,lng:e.center.lng})
          setBounds({ne:e.bounds.ne,sw:e.bounds.sw})
        }}
      >
      </GoogleMapReact>
    </div>
  );
}

