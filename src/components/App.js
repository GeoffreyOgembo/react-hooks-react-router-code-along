import React from './react'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'

import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./NavBar"


function App(){
    return(
        <div> 
            <NavBar /> 
            <Router> 
                <Switch> 
                    <Route exact path='/'> <About /> </Route>
                    <Route exact path='/Login'><Login /> </Route>
                    <Route exact ath='/Home'><Home /> </Route>
                </Switch>
            </Router>
        </div>    
    )
}


export default App;