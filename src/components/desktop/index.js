import React from "react"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
// COMPONENTS
import Home from "../content/Frontpage"; 
import About from "../content/Whatwedo";
import Maintainable from "../content/Maintainable";
import Contact from "../content/Getintouch"; 
import Navigation from "../nav/Navigation"; 

const Desktopview = () => {
    return (
        <>
        <Router>
            <Navigation />

            <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/maintainable" component={Maintainable} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
            </div>
            
        </Router>
        </>
    )
}

export default Desktopview; 