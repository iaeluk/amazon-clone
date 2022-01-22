import './App.css';
import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider'

function App() {

  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS', authUser.email.split('@')[0])

      if (authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])

  return (
    //BEM
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
        </Routes>

        <Routes>
          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            </>

          } />
        </Routes>

        <Routes>
          <Route path="/login" element={
            <>
              <Login />
            </>
          } />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
