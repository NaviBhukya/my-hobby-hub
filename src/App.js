import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Hobbies from './components/Hobbies';
import HobbyDetail from './components/HobbyDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hobbies" exact component={Hobbies} />
          <Route path="/hobbies/:id" component={HobbyDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
