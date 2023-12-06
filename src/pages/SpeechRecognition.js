import React from 'react';

import Header from '../Components/Header';
import SpeechToText from '../Components/SpeechToText';

function SpeechRecognition() {
  return (
    <div className='speech'>
      {/* <h1>Speech</h1> */}
      <img class="d-block w-100" src="https://i.imgur.com/dDrA5ox.jpg" alt="TTS" style={{ height: "auto" }} />
      <SpeechToText />
    </div>

    // <React.Fragment>
    //   <Header />
    //   <SpeechToText />
    // </React.Fragment>
  );
}

export default SpeechRecognition;