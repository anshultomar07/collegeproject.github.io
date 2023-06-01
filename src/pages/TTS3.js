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

  return (
    <div>
      <div>
        <button onClick={handleToggleListening}>
          {listening ? 'Stop Speech Recognition' : 'Start Speech Recognition'}
        </button>
        <button onClick={handleResetTranscript}>Reset</button>
        <button onClick={isSpeaking ? handleStopSpeaking : handleSpeak}>
          {isSpeaking ? 'Stop' : 'Speak'}
        </button>
      </div>
      <textarea
        value={text || transcript}
        onChange={handleTextareaChange}
        onKeyDown={handleTextareaKeyDown}
        placeholder="Speak or type here"
      />
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