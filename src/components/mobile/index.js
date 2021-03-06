import React from "react"; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
// IMPORT OF COMPONENTS
import Frontpage from "./pages/Frontpage";
import About from "./pages/About";
import Maintainable from "./pages/Maintainable";
import Contact from "./pages/Contact"; 
import Navigation from "../nav/Navigation";
import WeatherApp from "../weather/index";
// IMPORT OF STYLESHEETS
import "./MobileStyle.scss"; 

const MobileView = () => {

    return (
        <>
            <div id="mobileContainer">
                <Router>
                    <Navigation />

                    <div id="mobile_content_wrapper">
                        <Switch>
                            <Route exact path="/" component={Frontpage} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/maintainable" component={Maintainable} />
                            <Route exact path="/contact" component={Contact} />
                        </Switch>
                    </div>
                    
                </Router>

                <WeatherApp />
            </div>
        </>
    ) // END RETURN
} // END CONST 

export default MobileView; 