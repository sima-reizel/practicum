import './App.css';
import React, { useMemo } from 'react';
import ButtonShow from './features/buttonShow';
import Image from './image';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
           <Route path="image" element={<Image/>} />
           <Route path="/" element={<ButtonShow/>} />
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
