import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function SpeechToTextAndTextToSpeech2() {
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const handleSpeak = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text || transcript);
    synth.speak(utterance);
    setIsSpeaking(true);
  };

  const handleStopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const handleToggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const handleResetTranscript = () => {
    resetTranscript();
    setText('');
  };

  const handleTextareaChange = (event) => {
    setText(event.target.value);
  };

  const handleTextareaKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (isSpeaking) {
        handleStopSpeaking();
      } else {
        handleSpeak();
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(transcript || text);
    // alert("Text copied to clipboard");
  }

  const styles = {
    backgroundImage: 'url("https://i.imgur.com/15iW7lD.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    // You can add more background properties as needed
  };

  const text_area = {
    margin: 'auto',
    display: 'block'
  }

  const speak_btn = {
    margin: 'auto auto 10px 10px',
    // display: 'block',
    padding: '4px 14px',
    borderRadius: '14px'
  }

  return (
    <div style={styles}>
      <div style={{ position: 'relative', top: '20rem' }}>
        <div style={{ textAlign: 'center' }}>
          <button style={speak_btn} onClick={handleToggleListening}>
            {listening ? 'Stop Speech Recognition' : 'Start Speech Recognition'}
          </button>
          <button style={speak_btn} onClick={handleResetTranscript}>Reset</button>
          {/* <button style={speak_btn} onClick={isSpeaking ? handleStopSpeaking : handleSpeak}>
            {isSpeaking ? 'Stop' : 'Speak'}
          </button> */}
        </div>

        <textarea
          style={text_area}
          value={text || transcript}
          onChange={handleTextareaChange}
          onKeyDown={handleTextareaKeyDown}
          placeholder="Your text will be displayed here..."
        />
        <div style={{textAlign:'right', marginRight : '11.5rem'}}> <button style={speak_btn} onClick={handleCopy}>Copy Text</button> </div>
      </div>
    </div>
  );
}

export default SpeechToTextAndTextToSpeech2;




// import React, { useState } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// function SpeechToTextAndTextToSpeech2() {
//   const [text, setText] = useState('');
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const { transcript, listening, resetTranscript } = useSpeechRecognition();

//   const handleSpeak = () => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
//     synth.speak(utterance);
//     setIsSpeaking(true);
//   };

//   const handleStopSpeaking = () => {
//     window.speechSynthesis.cancel();
//     setIsSpeaking(false);
//   };

//   const handleToggleListening = () => {
//     if (listening) {
//       SpeechRecognition.stopListening();
//     } else {
//       SpeechRecognition.startListening({ continuous: true });
//     }
//   };

//   const handleResetTranscript = () => {
//     resetTranscript();
//     setText('');
//   };

//   const handleTextareaChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleTextareaKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       if (isSpeaking) {
//         handleStopSpeaking();
//       } else {
//         handleSpeak();
//       }
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={handleToggleListening}>
//           {listening ? 'Stop Speech Recognition' : 'Start Speech Recognition'}
//         </button>
//         <button onClick={handleResetTranscript}>Reset</button>
//         <button onClick={isSpeaking ? handleStopSpeaking : handleSpeak}>
//           {isSpeaking ? 'Stop' : 'Speak'}
//         </button>
//       </div>
//       <textarea
//         value={isSpeaking ? text : transcript}
//         onChange={handleTextareaChange}
//         onKeyDown={handleTextareaKeyDown}
//         placeholder="Speak or type here"
//       />
//     </div>
//   );
// }

// export default SpeechToTextAndTextToSpeech2;