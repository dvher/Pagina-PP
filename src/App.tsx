import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    );
  }
}