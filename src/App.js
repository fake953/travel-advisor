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
  const [Bounds, setBounds] = useState({});
  const [places, setPlaces] = useState([]);
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords: { latitude, longitude } }) => {
  //       setCoordinets({ lat: latitude, lan: longitude });
  //     }
  //   );
  // });
  useEffect(() => {
    console.log(coordinets, Bounds);
    GetApi(Bounds.ne, Bounds.sw).then((data) => {
      setPlaces(data);
    });
    console.log(places);
  }, [coordinets, Bounds]);
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="grid grid-cols-12 w-screen">
        <div className="col-span-12 md:col-span-4 ">
          <List places={places} />
        </div>
        <div className="col-span-12 md:col-span-8 ">
          <Map
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
