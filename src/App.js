import React from 'react';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import CurrentWeather from './Components/CurrentWeather'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>

    

    
      <div className="App">

        <Route path='/'><Navbar /></Route>
        <Route exact path='/home'><Home /></Route>
        <Route exact path='/currentweather' component={CurrentWeather}></Route>
        
        
      </div>
      
    </Router>
  );
}

export default App;
