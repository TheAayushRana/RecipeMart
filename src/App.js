import React from 'react'
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';

export default function App() {

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
