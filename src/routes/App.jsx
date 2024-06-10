import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home.jsx';
import Chatbot from '../Pages/Chatbot.jsx';
import ChatbotV2 from '../Pages/ChatbotV2.jsx';




import '../Styles/App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Chatbot/>}  />
        <Route exact path='/testv2' element={<ChatbotV2/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
