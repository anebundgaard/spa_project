import React from "react"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
// COMPONENTS
import Frontpage from "./pages/Frontpage";
import About from "./pages/About";
import Maintainable from "./pages/Maintainable";
import Contact from "./pages/Contact"; 
import Navigation from "../nav/Navigation";
// STYLESHEET

const MobileView = () => {
    return (
        <>
        <div id="mobileContainer">
        <Router>

            <Navigation />

            <div>
            <Switch>
                <Route exact path="/" component={Frontpage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/maintainable" component={Maintainable} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
            </div>
            
        </Router>
        </div>

        </>
    )
}

export default MobileView; 