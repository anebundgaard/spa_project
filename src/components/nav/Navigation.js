import React, {useState} from 'react'
import {Link} from "react-router-dom";
// IMPORT OF COMPONENTS
import Menu from "./menu.json"; 
import Register from "../content/register.json";
// IMPORT OF STYLESHEET
import "../../App.scss"; 

const Navigation = () => {
    // MENUBAR HOVER
    const routerButtonColor= ["#b1d2e800","#184059","#5d8aa6", "#bf7b3f"];
    const [index, setIndex] = useState(0);

    const navigator = (e) => {
        setIndex(e.currentTarget.dataset.index);
        
        let getChildConChild = document.querySelectorAll("#navContainer > nav > #menu > div ");

        getChildConChild.forEach((item) => {
            item.style.height="0"; 
        }) 

        document.querySelector(".navi" + e.currentTarget.dataset.index).style.height = "10px";
        document.querySelector(".navi" + e.currentTarget.dataset.index).style.backgroundColor = "routerButtonColor[e.currentTarget.dataset.index]";
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
                            <div id="children" className={"navi" + index} style={{backgroundColor:routerButtonColor[index]}} ></div>
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