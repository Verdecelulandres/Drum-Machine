import React from 'react';
import './App.css';

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
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3',
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

function getThreeDrumPads (audioSrc) {
  let out = [];
  for(let i = 0; i< 3; i++){
    const { key, audio, audioDescription } = audioSrc[i];
    out.push( <div className='col-4'>
      <button className='drum-pad' id={audioDescription}>{key}<audio src={audio} className='clip' id={key}></audio></button>
    </div>);
  }
  return out;
}

function App() {
  return (
    <div className="App container-fluid">
      <div className='row' id='drum-machine'>
        <div className='row'>
          {getThreeDrumPads(keyAudio.slice(0,3))}
        </div>
        <div className='row'>
          {getThreeDrumPads(keyAudio.slice(3,6))}
        </div>
        <div className='row'>
          {getThreeDrumPads(keyAudio.slice(6,9))}
        </div>
        <div id='display'></div>
      </div>
    </div>
  );
}

export default App;
