import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom'; //Switch renders the first route available. Useful for more control over our code.

const HatsPage = () => (
  <div>
    Hats Page
  </div>
);

function App() {
  return (
    <div>
      <Switch> 
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
