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
import WeatherApp from "../weather/index";
// STYLESHEETS
import "../desktop/DesktopStyle.scss";

const Desktopview = () => {
    return (
        <>
        <div id="desktopContainer">

            {/* NAVIGATION */}
            <Router>
                <Navigation />

                <section>
                <Switch>
                    <Route exact path="/" component={Frontpage} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/maintainable" component={Maintainable} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
                </section>
                
            </Router>

            <WeatherApp />

        </div>
        
        </>
    )
}

export default Desktopview; 