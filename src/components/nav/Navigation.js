import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Menu from "./menu.json"; 
import "../../App.scss"; 

const Navigation = () => {

    // console.log(Menu.hover[1].src); 

    // HOVER
    
    const [index, setIndex] = useState(0); 
    const [image, setImage] = useState(""); 

    const displayHover = (e) => {
        setIndex(e.currentTarget.dataset.index);

        if (e.currentTarget.dataset.index == 0 ) {

        }
        if (e.currentTarget.dataset.index == 1 ) {
            setImage(Menu.hover[0].src); 
        }
        if (e.currentTarget.dataset.index == 2 ) {
            setImage(Menu.hover[1].src); 
        } 
        if (e.currentTarget.dataset.index == 3 ) {
            setImage(Menu.hover[2].src); 
        }
    }


    return (
        <>
        <div id="navContainer">
            <nav>
                <ul>
                    {
                    Menu.menubar.map((data, index) => (
                        <li id="links" key={"links" + index} onClick={displayHover} data-index={index}>
                            <Link to={data.link} ><img src={data.src} /></Link>
                        </li>
                    ))
                }
                <img src={image} id="hoverLine"/>
                </ul>
            </nav>
        </div>

        </>
    ); // END RETURN
} // END NAVIGATION

export default Navigation; 