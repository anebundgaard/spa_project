import React, {useEffect} from "react";
// IMPORT OF COMPONENTS
import Register from "../../content/register.json";

const Maintainable = () => {
    useEffect(() => {
        document.querySelector(".navi2").style.display="block";
        document.querySelector(".navi2").style.background="routerButtonColor[e.currentTarget.dataset.index]";
       }, []);

    // BACKGROUND COLOR
    if ((window.onload) = (e) => {
        document.body.style.background = "#bfddef"; 
    }) 
    if ((window.onclick) = (e) => {
        document.body.style.background = "#bfddef"; 
    })

    return (
        <>
            <div id="desktop_page_hero">
                <img src={Register.desktop_menu[0].maintainable} alt="Maintainable" />
            </div>

            {<article id="textbox">
                    <h1>{Register.maintainable[0].headline}</h1>
                    <p>{Register.maintainable[0].text}</p>
            </article>}

            <article id="infobox">
                <p>{Register.maintainable[0].box}</p>
            </article>
        </>
    ) // END RETURN
} // END CONST
export default Maintainable; 