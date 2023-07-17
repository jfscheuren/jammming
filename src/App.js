import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import SearchBar from './SearchBar';
import Tracklist from "./Tracklist"

function App() {
 const  myThing=[{name:"Sanctified", artist: "Rick Ross", album: "Mastermind", key:"1"}, 
  {name:"The Bends", artist: "Radiohead", album: "The Bends", key:"2"}, 
  {name:"Double Joe", artist: "Bright Eyes", album: " A Collection of Songs...", key: "3"}]
  
  const [results, setState] = useState([{myThing}]);
  console.log(typeof(myThing))

 // {console.log(myThing[0].name)}
  
  return (
<>
  <div>
  <SearchBar />

    <Tracklist results={results} />

  <br></br>
 <button></button>
    <button>Save to Spotify</button>
  </div>
</>
  );
}

export default App;
 