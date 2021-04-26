import React, {useEffect} from "react";
// IMPORT OF COMPONENTS
import Register from "../../content/register.json";

const Contact = () => {
    // MENUBAR HOVER
    useEffect(() => {
        document.querySelector(".navi3").style.display="block";
        document.querySelector(".navi3").style.background="routerButtonColor[e.currentTarget.dataset.index]";
    }, []);

    // BACKGROUND COLOR
    if ((window.onload) = (e) => {
        document.body.style.background = "#ffb472"; 
    }) 
    if ((window.onclick) = (e) => {
        document.body.style.background = "#ffb472"; 
    })

    return (
        <>
            <div id="desktop_page_hero">
                <img src={Register.desktop_menu[0].getintouch} alt="Get in touch" />
            </div>

            {<article id="textbox">
                    <h1>{Register.contact[0].headline}</h1>
                    <p>{Register.contact[0].text}</p>
            </article>}

            <figure id="imgbox">
                {Register.smallImg.map((data,index) => (
                    <img src={data.src} alt="Images of Spa co-workers" />
                ))}
                {Register.smallImg.map((data,index) => (
                    <p>{data.link}</p>
                ))}
            </figure>

            <article id="infobox">
                <p>{Register.contact[0].box}</p>
            </article>
        </>
    ) // END RETURN
} // END CONST

export default Contact; 