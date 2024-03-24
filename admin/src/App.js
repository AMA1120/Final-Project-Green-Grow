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
import AddFarmer from './pages/addFarmer';
import Articles from './pages/articles';
import AddArticle from './pages/addArticle';
import FertilizerDelivery from './pages/fertilizerDelivery';


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
          <Route path="/addFO" element={<AddFO />}/>
          <Route path="/farmers" element={<Farmers />}/>
          <Route path="/addFarmer" element={<AddFarmer />}/>
          <Route path="/articles" element={<Articles />}/>
          <Route path="/addArticle" element={<AddArticle />}/>
          <Route path="/fertilizerDelivery" element={<FertilizerDelivery />}/>
          <Route path="/login" element={<Login />}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
