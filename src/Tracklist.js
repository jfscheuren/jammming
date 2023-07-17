import react from 'react';
import App from './App.js'


function Tracklist(props) {
    console.log(props.results)
return(
<div>
  {props.results.map(result => <p key="{result.name}">{result.name}</p>)} 
</div>
);


}

export default Tracklist;
