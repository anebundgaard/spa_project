import React, {useEffect} from "react"
// IMPORT OF COMPONENTS
import Register from "../../content/register.json";

const About = () => {
    // MENUBAR HOVER
    useEffect(() => {
        document.querySelector(".navButton1").style.display="block";
        document.querySelector(".navButton1").style.background="routerButtonColor[e.currentTarget.dataset.index]";
       }, []);

    // BACKGROUND COLOR
    if ((window.onload) = (e) => {
        document.body.style.background = "#abcfe6"; 
    }) 
    if ((window.onclick) = (e) => {
        document.body.style.background = "#abcfe6"; 
    })

    // TEST WITH TARGETING SPECIFIC WORDS IN JSON
    {const string = Register.about[0].headline;
    const stringColor = string.substring(13);
    console.log(stringColor);}
    
    return (
        <>
            <div id="desktop_page_hero">
                <img src={Register.desktop_menu[0].whatwedo} alt="What we do" />
            </div>

            {<article id="textbox">
                <h1>{Register.about[0].headline}</h1>
                <p>{Register.about[0].text}</p>
            </article>}

            <article id="infobox">
                <p>{Register.about[0].box}</p>
            </article>
        </>
    ) // END RETURN
} // END CONST

export default About; 