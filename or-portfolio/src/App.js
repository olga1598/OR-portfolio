import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Image from "./components/Image/Image";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Contacts from './components/Contacts/Contacts';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={AboutMe} exact/>
          <Route path="/portfolio" component={Portfolio} exact/>
          <Route path="/contacts" component={Contacts} exact/>
          <Route component={NotFoundPage} exact/>       
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
