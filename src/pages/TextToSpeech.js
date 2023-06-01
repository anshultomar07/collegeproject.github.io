import React, { useState } from 'react';

function TextToSpeech() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState(null);

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

  // Fetch the available voices when the component is mounted
  React.useEffect(() => {
    const voices = window.speechSynthesis.getVoices();
    setVoice(voices[0]);
  }, []);

  return (
    <div>
      
      <textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter text to speak" />
      <div>
        <label>Select a voice:</label>
        <select value={voice ? voice.name : ""} onChange={handleVoiceChange}>
          {window.speechSynthesis.getVoices().map(voice => (
            <option key={voice.name} value={voice.name}>{voice.name} ({voice.lang})</option>
          ))}
        </select>
      </div>
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
}

export default TextToSpeech;