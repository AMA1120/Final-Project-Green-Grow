import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Farmer from './pages/FarmerHome/Farmer.js';
import Cinnamon from './pages/Cinnamon/cinnamon.js';
import Tea from './pages/Tea/tea.js';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/Farmer' component={Farmer} />
        <Route path='/Cinnamon' component={Cinnamon} />
        <Route path='/Tea' component={Tea} />

      </Switch>
    </Router>
  );
};

export default App;
