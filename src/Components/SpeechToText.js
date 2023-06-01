import React from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import './stt.css';
 
const SpeechToText = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition({
    continuous: true
  });
 
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const listenContinuously = () =>{
    SpeechRecognition.startListening();
  };
 
  return (
    <div>
      {/* <br /> */}
      <div class="create_div selectBtnCont stt-container" style={{ "text-align": "center" }}>

        <div class="overlap-group26">
          <div class="rectangle-20">
            <div class="meta-description valign-text-middle var1 font-weight-bolder">Speech to Text</div>
            <textarea value={transcript} class="write-a-descrip-ntext-to-the-ai1 Blogtitle" placeholder="Your text will be displayed here"></textarea>
          </div>
        </div>
        <p>{listening ? 'Listening......' : ' '}</p>
        <button id="start-button" class="btn" onClick={listenContinuously}>Start</button>
        <button id="stop-button" class="btn" onClick={SpeechRecognition.stopListening}>Stop</button>
        <button id="reset-button" class="btn" onClick={resetTranscript}>Reset</button>

        

      </div>
    </div>
  );
};
export default SpeechToText;