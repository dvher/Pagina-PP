/*
*TODO:
* - Modify Home elements
*/
import { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Admin from './components/Admin';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SP from './config/configureStore';
import Aos from 'aos';
import 'aos/dist/aos.css';
const {store, persistor} = SP();

export default function App() {
  useEffect(() => {
    Aos.init({});
  }, [])
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className='common-background-color'>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home effect={useEffect} />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/logout' element={<Logout />} />
            </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}