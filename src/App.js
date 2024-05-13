import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';


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

// Initializes the pads, pushing them to a JSX object array. each pad comes with audio elements that trigger 2 functions when clicked or the correct key is pressed
function getDrumPads (audioSrc) {
  var out = [];
  for(let i = 0; i< audioSrc.length; i++){
    const { key, audio, audioDescription } = audioSrc[i];
    out.push( 
      <button className='drum-pad' id={audioDescription} onClick={()=> {playSound(key); setDisplay(audioDescription)}}><b>{key}</b><audio src={audio} className='clip' id={key}></audio>
      </button>);
  }
  return out;
}

//Identifies the correct key on the keyUp event. Then plays the correct sound and sets the display
function handlekeyPress(e) {
  switch (e.key) {
    case 'q':
      playSound('Q');
      setDisplay('Heater 1');
      break;
    case 'w':
      playSound('W');
      setDisplay('Heater 2');
      break;
    case 'e':
      playSound('E');
      setDisplay('Heater 3');
      break;
    case 'a':
      playSound('A');
      setDisplay('Heater 4');
      break;
    case 's':
      playSound('S');
      setDisplay('Clap');
      break;
    case 'd':
      playSound('D');
      setDisplay('Open HH');
      break;
    case 'z':
      playSound('Z');
      setDisplay('Kick-n\'Hat');
      break;
    case 'x':
      playSound('X');
      setDisplay('Kick');
      break;
    case 'c':
      playSound('C');
      setDisplay('Closed HH');
      break;
    default:
      console.log('That is not a valid key');
      break;
  }
}

function playSound(key) {
  let sound = document.getElementById(key);
  sound.play();
}
const[display, setDisplay] = useState('Click or push the key you want to hear');

useEffect(() => {
  // Set focus to the component when it mounts
  document.getElementById('drum-machine').focus();

}, []);
  return (
    <div className="App container-fluid">
      <div  id='drum-machine' tabIndex={1}> 
        <div className='pad-container'>
          {getDrumPads(keyAudio)}
        </div>
        <div id='display'>{display}</div>
      </div>
    </div>
  );
}

export default App;
