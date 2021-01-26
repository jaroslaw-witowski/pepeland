import React from 'react';
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      {/* <Route path='/' exact component={}/> */}
    </Switch>
    </BrowserRouter>

  );
}

export default App;
