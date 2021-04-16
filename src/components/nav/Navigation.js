import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Menu from "./menu.json"; 

const Navigation = () => {

    // HOVER
    const [index, setIndex] = useState(0); 

    const openModal = (e) => {
        setIndex(e.currentTarget.dataset.index);
        console.log(index)
    }

    return (
        <>
        <div id="navContainer">
            <nav>
                {
                Menu.menubar.map((data, index) => (
                    <li id="links" key={"links" + index}>
                        <Link to={data.link} data-index={index} onClick={openModal}><img src={data.src} /></Link>
                    </li>
                ))
                }
            </nav>
        </div>

        </>
    ); // END RETURN
} // END NAVIGATION

export default Navigation; 