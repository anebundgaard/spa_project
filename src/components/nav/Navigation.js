import React, {useState} from 'react'
import {Link} from "react-router-dom";
// COMPONENTS
import Menu from "./menu.json"; 
import Register from "../content/register.json";
import "../../App.scss"; 

const Navigation = () => {

    // console.log(Menu.hover[1].src); 

    // HOVER
    
    const [index, setIndex] = useState(0); 
    const [image, setImage] = useState(""); 

    const displayHover = (e) => {
        setIndex(e.currentTarget.dataset.index);

        
        
    }


    return (
        <>
        <div id="navContainer">
            <nav>
                <ul>
                    {
                    Menu.menubar.map((data, index) => (
                        <li id="links" key={"links" + index} data-index={index}>
                            <Link to={data.link} ><img src={data.src} /></Link>
                        </li>
                    ))
                }
                <img src={image} id="hoverLine"/>
                </ul>
            </nav>
            {/* LOGO */}
            <div id="logo">
                {
                    Register.logo.map((data,index) => (
                        <img src={data.main} />
                    ))
                }
            </div>
        </div>

        </>
    ); // END RETURN
} // END NAVIGATION

export default Navigation; 