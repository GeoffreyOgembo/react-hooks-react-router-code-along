import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

function App() {
  return (
      <div>
        <NavBar />
        <Route exact path="/">
         <Home />
       </Route>
       <Route path="/about">
         <About />
       </Route>
       <Route path="/login">
         <Login />
       </Route>
    </div>
    );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);