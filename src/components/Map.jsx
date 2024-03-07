import GoogleMapReact from "google-map-react";
export const Map = ({
  setCoordinets,
  setBounds,
  coordinets,
  places,
  loading,
  setChildClicked,
  setScroll,
}) => {
  console.log(places);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDnbwMkPO_41VTpV_MKAk9rrUbI86wCxZo" }}
        defaultCenter={coordinets}
        defaultZoom={14}
        onChange={(e) => {
          setCoordinets({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.bounds.ne, sw: e.bounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
          const result = places[child];
          setScroll(result);
          console.log("clicked on the card");
        }}
      >
        {places?.map((place, i) => {
          return (
            <div
              className="my-3 min-h-16 min-w-24 p-2 rounded relative z-0 hover:z-10
           bg-white shadow-md overflow-hidden"
              key={i}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
            >
              <span className="mx-2 text-center text-base">{place.name}</span>
              <img
                className="text-gray-600 object-cover mr-2 shadow-sm h-20 w-20"
                src={
                  place.photo
                    ? place.photo.images.large.url
                    : "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.webp?b=1&s=612x612&w=0&k=20&c=C318sxgBBIO66E7vi_0Eu3lXHm9uRDauKvRgeyxY2O4="
                }
                alt=""
              />
              <div className="text-sm flex justify-between">
                <span>Rating</span>
                <span>{place.rating}</span>
              </div>
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};
