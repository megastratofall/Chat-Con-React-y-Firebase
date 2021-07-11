import "./Sidebar.css";
import { useStateValue } from "../Stateprovider";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [weatherdata, setWeatherdata] = useState();

  useEffect(() => {
    const successCallback = (position) => {
      console.log(position.coords.longitud, position.coords.latitude);
      let URL = `https://community-open-weather-map.p.rapidapi.com/find?q=%3CREQUIRED%3E&cnt=0&mode=null&lon=${position.coords.longitud}&type=link%2C%20accurate&lat=${position.coords.latitude}&units=metric`;
      fetch(URL, {
        headers: {
          "x-rapidapi-key":
            "60294d8dc7mshb3fbb7c4f9056e2p172fb0jsn2ec4e844ca88",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((data) => setWeatherdata(data))
        .then((response) => {
          console.log(response);
        });
    };
    const errorCallback = (err) => console.log(err);
    return () => {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    };
  }, []);

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        {/* <h4>{weatherdata.city.name}</h4>
        <h3>{Math.round(weatherdata?.list[0].main.temp)}</h3> */}
      </div>
      <div className="sidebar__bottom">
        <h4>Welcome</h4>
        <h4>{user?.displayName}</h4>
      </div>
    </div>
  );
};

export default Sidebar;
