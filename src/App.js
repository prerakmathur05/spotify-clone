import "./App.css";
import Login from "./Login";
import { useState, useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi(); //new object of SpotifyWebApi
function App() {
  const [token, setToken] = useState(null);
  //Run code based on a given condition i.e. when app loads or when the items of array below changes, there can be multiple useEffects
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token; //or hash["access_token"] objects props can be called by both ways you know
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token); //setAccessToken is a function of object spotify called on line 7
      spotify.getMe().then((user) => console.log("user is here ", user)); //its an synchronous function which returns the user details using the access token
    }
    console.log("I have a token ", token);
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
