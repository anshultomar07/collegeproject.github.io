import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function SpeechToTextAndTextToSpeech() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState(null);
  const { transcript, resetTranscript } = useSpeechRecognition({
    continuous: true,
    onResult: (result) => setText(result)
  });

  const handleSpeak = () => {
    if (!voice) {
      alert("Please select a voice first");
      return;
    }
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    synth.speak(utterance);
  }

  const handleVoiceChange = (event) => {
    const selectedVoiceName = event.target.value;
    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
    setVoice(selectedVoice);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(transcript);
    alert("Text copied to clipboard");
  }

  // Fetch the available voices when the component is mounted
  React.useEffect(() => {
    const voices = window.speechSynthesis.getVoices();
    setVoice(voices[0]);
  }, []);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div>
      <div class="create_div selectBtnCont stt-container" style={{ "text-align": "center" }}>
        {/* <div>
          <textarea value={transcript} onChange={(event) => setText(event.target.value)} placeholder="Speak here" />
          <button onClick={handleCopy}>Copy Text</button>
        </div>
        <div>
          <button onClick={SpeechRecognition.startListening}>Start Speech Recognition</button>
          <button onClick={SpeechRecognition.stopListening}>Stop Speech Recognition</button>
          <button onClick={resetTranscript}>Reset</button>
        </div> */}
        <div style={{width:"30%", margin:"10px auto"}}>
          <img class="d-block w-100" src="https://static.vecteezy.com/system/resources/previews/015/984/798/original/text-to-speech-icon-free-vector.jpg" alt="TTS" />
        </div>
        <div class="rectangle-20">
            <div class="meta-description valign-text-middle var1 font-weight-bolder">Text to Speech</div>
            {/* <textarea value={transcript} class="write-a-descrip-ntext-to-the-ai1 Blogtitle" placeholder="Your text will be displayed here"></textarea> */}
        </div>
        <div>
          <textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter text to speak" />
        </div>
        <div>
          <label>Select a voice: </label>
          <select value={voice ? voice.name : ""} onChange={handleVoiceChange}>
            {window.speechSynthesis.getVoices().map(voice => (
              <option key={voice.name} value={voice.name}>{voice.name} ({voice.lang})</option>
            ))}
          </select>
        </div>
        <div>
          <button class="btn" onClick={handleSpeak}>Speak</button>
        </div>
      </div>
    </div>
  );
}

export default SpeechToTextAndTextToSpeech;