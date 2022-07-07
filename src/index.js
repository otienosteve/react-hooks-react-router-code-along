import React from "react";
import ReactDOM from "react-dom";
import Login from './Login';
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";


import { BrowserRouter, Route,Switch} from 'react-router-dom'


/* define the NavBar component */


// function App() {
//   return <Home />;
// }



ReactDOM.render(
<BrowserRouter>
<NavBar/>
<Switch>
<Route path="/about">
  <About/>
</Route>
<Route path="/login">
  <Login/>
</Route>
<Route exact path='/'>
<Home />
</Route>
</Switch>
</BrowserRouter>
, document.getElementById("root"));
