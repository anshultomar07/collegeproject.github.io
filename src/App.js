import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import SpeechRecognition from './pages/SpeechRecognition';
import TextToSpeech from './pages/TextToSpeech';
import SpeechToTextAndTextToSpeech from './pages/TTS2';
import SpeechToTextAndTextToSpeech2 from './pages/TTS3';
import Test from './pages/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="speech" element={<SpeechRecognition />} />
          <Route path="tts" element={<TextToSpeech />} />
          <Route path="tts2" element={<SpeechToTextAndTextToSpeech />} />
          <Route path="tts3" element={<SpeechToTextAndTextToSpeech2 />} />
          <Route path="test" element={<Test />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
export default App;
