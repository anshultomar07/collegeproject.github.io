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
      <div>
        <button onClick={SpeechRecognition.startListening}>Start Speech Recognition</button>
        <button onClick={SpeechRecognition.stopListening}>Stop Speech Recognition</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
      <div>
        <textarea value={transcript} onChange={(event) => setText(event.target.value)} placeholder="Speak here" />
        <button onClick={handleCopy}>Copy Text</button>
      </div>
      <div>
        <label>Select a voice:</label>
        <select value={voice ? voice.name : ""} onChange={handleVoiceChange}>
          {window.speechSynthesis.getVoices().map(voice => (
            <option key={voice.name} value={voice.name}>{voice.name} ({voice.lang})</option>
          ))}
        </select>
      </div>
      <div>
        <textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter text to speak" />
        <button onClick={handleSpeak}>Speak</button>
      </div>
    </div>
  );
}

export default SpeechToTextAndTextToSpeech;