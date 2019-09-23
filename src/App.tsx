import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
    </div>
  );
}

export default App;
