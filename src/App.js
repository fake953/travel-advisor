import { useState, useEffect } from "react";
import Header from "./components/Header";
import List from "./components/List";
import { Map } from "./components/Map";
import { GetApi } from "./api";
const App = () => {
  const [coordinets, setCoordinets] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });
  const [loading, setLoading] = useState(false);
  const [Bounds, setBounds] = useState({});
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [scroll, setScroll] = useState(null);
  const [type, setType] = useState(null);
  const [floorReting, setFloorRating] = useState(0);
  const [filterdPlaces, setFilterdPlaces] = useState(null);
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords: { latitude, longitude } }) => {
  //       setCoordinets({ lat: latitude, lan: longitude });
  //     }
  //   );
  // });
  useEffect(() => {
    console.log({ floorReting });
    const result = places?.filter((place) => place.rating > floorReting);
    console.log(result);
    setFilterdPlaces(result);
  }, [floorReting]);
  useEffect(() => {
    if (!type) setType("restaurants");
    console.log(type);
    setLoading(true);
    GetApi(type, Bounds.ne, Bounds.sw).then((data) => {
      setPlaces(data);
      setLoading(false);
    });
  }, [coordinets, Bounds, type]);
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="grid grid-cols-12 w-screen">
        <div className="col-span-12 md:col-span-4 ">
          <List
            setFloorRating={setFloorRating}
            floorReting={floorReting}
            setType={setType}
            places={filterdPlaces || places}
            childClicked={childClicked}
            loading={loading}
            type={type}
            setScroll={setScroll}
            scroll={scroll}
          />
        </div>
        <div className="col-span-12 md:col-span-8 ">
          <Map
            setScroll={setScroll}
            setChildClicked={setChildClicked}
            places={filterdPlaces || places}
            setCoordinets={setCoordinets}
            setBounds={setBounds}
            coordinets={coordinets}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
