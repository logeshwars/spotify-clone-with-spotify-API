import { useEffect} from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./Spotify";
import SpotifyWebApi from 'spotify-web-api-js'
import Player from "./Player";
import { useDataLayerValue } from "./Datalayer";
const spotify = new SpotifyWebApi();
function App() {
  const [{ user,token }, dispatch] = useDataLayerValue();
  useEffect(()  =>  {
    const hash  =  getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;
    spotify.setAccessToken(_token);
      if(_token){
      dispatch({
        type:"Set_Token",
        token:_token,
      })
       spotify.getMe().then(user=>{
         dispatch({
           type:"Set_User",
           user:user,
           
         })
       });
       spotify.getUserPlaylists().then((playlists)=>{
         dispatch({
           type:"Set_Playlists",
           playlists:playlists,
         })
       })
       spotify.getPlaylist("37i9dQZEVXcG9NhXdtf9tQ").then(response=>{
         dispatch({
           type:"SetDiscoverWeekly",
           discover_weekly:response
         })
       });
    }    
  },  []);
  
  return (
    <div className="app">
      {
       token?<Player spotify={spotify} />:<Login/>
      }
    </div>
  );
}

export default App;
