import React, {useEffect} from "react"
import Register from "../../content/register.json";

const About = () => {
    // BACKGROUND COLOR
    if ((window.onload) = (e) => {
        document.body.style.background = "#abcfe6"; 
    }) 
    
    if ((window.onclick) = (e) => {
        document.body.style.background = "#abcfe6"; 
    })

    return (
        <>
        <div id="desktop_page_hero">
            <img src={Register.desktop_menu[0].whatwedo} />
        </div>

        {
            <article id="textbox">
                <h1>{Register.about[0].headline}</h1>
                <p>{Register.about[0].text}</p>
            </article>
        }

        <article id="infobox">
            <p>{Register.about[0].box}</p>
        </article>

        </>
    ) // END RETURN
} // END CONST

export default About; 