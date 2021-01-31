import React from 'react';
import Header from '../header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      {/* <Route path='/' exact component={}/> */}
    </Switch>
    </BrowserRouter>

  );
}

export default App;
