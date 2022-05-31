import React from 'react'
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';

export default function App() {

  // const app_id ="65e56854";
  // const app_key ="518ca958c78fa487f664499b3341e04b";

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Navbar /> 
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>
  )
}
