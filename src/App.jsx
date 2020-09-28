import './App.scss';
import { LandingPage } from './pages';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './components/header';
import { Menu } from './components/menu/menu.component';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Menu />

      <main className="container dsc-content">
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
