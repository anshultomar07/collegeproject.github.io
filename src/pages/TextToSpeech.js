import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function TextToSpeech() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState(null);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

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

  const handleResetTranscript = () => {
    resetTranscript();
    setText('');
  };

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
  
  const styles = {
    backgroundImage: 'url("https://i.imgur.com/4yhV7ma.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    // You can add more background properties as needed
  };

  const text_area = {
    margin: 'auto',
    display: 'block'
  }

  const voice_select = {
    textAlign: 'center',
    margin: '8px'
  }

  const speak_btn = {
    margin: 'auto 10px',
    // display: 'block',
    padding: '4px 14px',
    borderRadius : '14px'
  }


  return (
    <div style={styles}>
      <div style={{position:'relative', top:'19rem'}}>
        <textarea style={text_area} value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter text to speak" />
        <div style={voice_select}>
          <label>Select a voice:</label>
          <select value={voice ? voice.name : ""} onChange={handleVoiceChange}>
            {window.speechSynthesis.getVoices().map(voice => (
              <option key={voice.name} value={voice.name}>{voice.name} ({voice.lang})</option>
            ))}
          </select>
        </div>
        <div style={{textAlign : 'center'}}> 
          <button style={speak_btn} onClick={handleSpeak}>Speak</button>
          <button style={speak_btn} onClick={handleResetTranscript}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default TextToSpeech;