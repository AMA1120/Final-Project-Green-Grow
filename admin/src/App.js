import React from 'react';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Home from './pages/home';
import AddASC from './pages/addASC';
import FarmersOrg from './pages/farmersOrg';
import AddFO from './pages/addFO';
import Farmers from './pages/farmers';


function App() {
  // const [count, setCount]=useState(0)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/addASC" element={<AddASC />}/>
          <Route path="/farmersOrg" element={<FarmersOrg />}/>
          <Route path="/farmers" element={<Farmers />}/>
          <Route path="/addFO" element={<AddFO />}/>
          <Route path="/login" element={<Login />}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
