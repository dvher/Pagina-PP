import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Admin from './components/Admin';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import IsAdmin from './reducers/IsAdmin';

const store = createStore(IsAdmin);
export default class App extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/admin' element={<Admin />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    );
  }
}