import React from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
 
const SpeechToText = () => {
  const { transcript, resetTranscript } = useSpeechRecognition({
    continuous: true
  });
 
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
 
  return (
    <div>
      <br />
      <div class="create_div selectBtnCont" style={{ "text-align": "center" }}>

        <div class="overlap-group26">
          <div class="rectangle-20">
            <div class="meta-description valign-text-middle var1 font-weight-bolder">Speech to Text</div>
            <textarea value={transcript} class="write-a-descrip-ntext-to-the-ai1 Blogtitle" placeholder="Your text will be displayed here"></textarea>
          </div>
        </div>

        <button class="btn btn-primary temp_generate" onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>

        

      </div>
    </div>
  );
};
export default SpeechToText;