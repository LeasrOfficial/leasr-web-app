import React from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Messages from './Components/Messages'
import Signup from './Components/Signup'
import Listing from './Components/Listing'
import Room from './Components/Room'
import Favorites from './Components/Favorites'

const App = () =>{
    return(
        <div>
            
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/About" component={About}/>
                    <Route path="/Favorites" component={Favorites}/>
                    <Route path="/Room" component={Room}/>
                    <Route path="/Listing" component={Listing}/> 
                    <Route path="/Messages" component={Messages}/>
                    <Route path="/Signup" component={Signup}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}


export default App 