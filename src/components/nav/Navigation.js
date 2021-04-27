import React, {useState, useEffect} from 'react'
import {Link, useLocation} from "react-router-dom";
// IMPORT OF COMPONENTS
import Menu from "./menu.json"; 
import Register from "../content/register.json";
// IMPORT OF STYLESHEET
import "../../App.scss"; 

const Navigation = () => {
    // LOCATION PATH
    const location = useLocation();
    const routers = ["/", "/about", "/maintainable","/contact"];
    
    const [frontpage,setFrontpage] = useState("0");
    const [about,setAbout] = useState("0");
    const [maintainable,setMaintainable] = useState("0");
    const [contact,setContact] = useState("0");
    const routersReference = [frontpage, about, maintainable, contact];

    useEffect(() => {
        switch(location.pathname) {
            case routers[0]:
                return setFrontpage("10px");
            case routers[1]:
                return setAbout("10px");
            case routers[2]:
                return setMaintainable("10px");
            case routers[3]:
                return setContact("10px");
            default:
                return "0";
        }
    }, []); 

    // MENUBAR HOVER
    const ButtonColor= ["#b1d2e800","#184059","#5d8aa6", "#bf7b3f"];
    const [index, setIndex] = useState(0);

    const navigator = (e) => {
        setIndex(e.currentTarget.dataset.index);
        
        let navButtonHover = document.querySelectorAll("#navContainer > nav > #menu > div ");

        navButtonHover.forEach((item) => {
            item.style.height="0"; 
        }) 

        document.querySelector(".navButton" + e.currentTarget.dataset.index).style.height = "10px";
        document.querySelector(".navButton" + e.currentTarget.dataset.index).style.backgroundColor = "ButtonColor[e.currentTarget.dataset.index]";
    }

    return (
        <>
            <div id="navContainer">
                <nav>
                    <ul id="menu">
                        {Menu.menubar.map((data, index) => (
                        <>
                            <li id="links" key={"links" + index} onClick={navigator} data-index={index}>
                                <Link to={data.link} ><img src={data.src} alt="Navigation bar" /></Link>
                            </li>
                            <div id="navButton" className={"navButton" + index} style={{height:routersReference[index], backgroundColor:ButtonColor[index]}} ></div>
                        </>
                        ))}
                    </ul>
                </nav>

                <div id="logo">
                    {Register.logo.map((data,index) => (
                        <img src={data.main} alt="Spa logo" />
                    ))}
                </div>
            </div> 
        </>
    ) // END RETURN
} // END NAVIGATION
export default Navigation; 