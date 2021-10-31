import React, { useEffect }from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import{BrowserRouter as Router, Switch, Route} 
from"react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Footer from "./Footer";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { CardElement, useStripe, useElements  } from "@stripe/react-stripe-js";
import Orders from './Orders'

const promise = loadStripe('pk_test_51JpygeSAhXfyXXLSX1iUa2dUDMra0VA8NQIomljGfNktleqDhQPgB0V1l7BdYqA6JLlyc317WdgwSWNNyNYFvgYI0010IYSI6U')

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ',authUser)

      if (authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  },[])

  return (
    // BEM
    
    <Router>
      
      <div className="app">
      
      <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders/>
            
          </Route>

          <Route path="/checkout">
          <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          <Footer />
          </Route>

          <Route path="/">
          <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
