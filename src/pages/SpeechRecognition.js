import React from 'react';

import Header from '../Components/Header';
import SpeechToText from '../Components/SpeechToText';

function SpeechRecognition() {


  return (
    
    <div className='speech'>
      {/* <h1>Speech</h1> */}
      <div style={{width:"25%", margin:"10px auto"}}>
        {/* <img class="d-block w-100" src="https://developer-blogs.nvidia.com/wp-content/uploads/2019/12/automatic-speech-recognition_updated.png" alt="TTS" /> */}
        <img class="d-block w-100" src="https://cdn-icons-png.flaticon.com/512/5262/5262029.png" alt="TTS" />
      </div>
      <SpeechToText />
    </div>

    // <React.Fragment>
    //   <Header />
    //   <SpeechToText />
    // </React.Fragment>
  );
}

export default SpeechRecognition;