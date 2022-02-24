import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Admin from './components/Admin';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import SP from './config/configureStore';
const {store, persistor} = SP();
export default class App extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    );
  }
}