import React from 'react';
import {Switch, Route} from 'react-router-dom'; //Switch renders the first route available. Useful for more control over our code.
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header';



function App() {
  return (
    <div>
      <Header />
      <Switch> 
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
