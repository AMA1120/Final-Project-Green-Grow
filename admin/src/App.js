import React from 'react';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import AddASC from './pages/Home/addASC';
import FarmersOrg from './pages/FO/farmersOrg';
import AddFo from './pages/FO/addFO';
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
          <Route path="/addASC" element={<AddASC />}/>
          <Route path="/farmersOrg" element={<FarmersOrg />}/>
          <Route path="/addFO" element={<AddFo />}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
