import React from 'react';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // const [count, setCount]=useState(0)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home />}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
