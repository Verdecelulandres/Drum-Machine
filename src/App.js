import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {

//Key-audio bank that stores the audio src and it's description.
const keyAudio = [
  { key: 'Q',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    audioDescription: 'Heater 1'
  },
  { key: 'W',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    audioDescription: 'Heater 2'
  },
  { key: 'E',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    audioDescription: 'Heater 3'
  },
  { key: 'A',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    audioDescription: 'Heater 4'
  },
  { key: 'S',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    audioDescription: 'Clap'
  },
  { key: 'D',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    audioDescription: 'Open HH'
  },
  { key: 'Z',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    audioDescription: 'Kick-n\'Hat'
  },
  { key: 'X',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    audioDescription: 'Kick'
  },
  { key: 'C',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    audioDescription: 'Closed HH'
  }
];

function getDrumPads (audioSrc) {
  var out = [];
  for(let i = 0; i< audioSrc.length; i++){
    const { key, audio, audioDescription } = audioSrc[i];
    out.push( 
      <button className='drum-pad' id={audioDescription} onKeyUp={(event)=> {handlekeyPress(event); setDisplay(audioDescription)}} onClick={()=> {playSound(key); setDisplay(audioDescription)}}><b>{key}</b><audio src={audio} className='clip' id={key}></audio>
      </button>);
  }
  return out;
}
function handlekeyPress(e){
  switch(e.keyCode){
    case 81:
      playSound('Q');
      break;
    case 87:  
    playSound('W');
    break;
    case 69:
      playSound('E');
      break;
    case 65:
      playSound('A');
      break; 
    case 83:
      playSound('S');
      break;
    case 68:
      playSound('D');
      break;
    case 90:
      playSound('Z');
      break;
    case 88:
      playSound('X');
      break;
    case 67:
      playSound('C');
      break;
    default:
      console.log("That is not a valid key");
      break;      
  }
}

function playSound(key) {
  let sound = document.getElementById(key);
  sound.play();
}
const[display, setDisplay] = useState('Click or push the key you want to hear');
  return (
    <div className="App container-fluid">
      <div  id='drum-machine'>
        <div className='pad-container'>
          {getDrumPads(keyAudio)}
        </div>
        <div id='display'>{display}</div>
      </div>
    </div>
  );
}

export default App;
