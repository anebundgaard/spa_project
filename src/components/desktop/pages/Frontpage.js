import React, {useEffect} from "react";
// IMPORT OF COMPONENTS
import Register from "../../content/register.json";

const Frontpage = () => {
    // MENUBAR HOVER
    useEffect(() => {
        document.querySelector(".navButton0").style.display="block";
        document.querySelector(".navButton0").style.background="routerButtonColor[e.currentTarget.dataset.index]";
       }, []);

    // BACKGROUND COLOR
    if ((window.onload) = (e) => {
        document.body.style.backgroundImage =  "linear-gradient(white, #b1d2e8)"; 
    }) 
    if ((window.onclick) = (e) => {
        document.body.style.backgroundImage =  "linear-gradient(white, #b1d2e8)"; 
    })

    return (
        <>
            <div id="frontImgMap">
                {Register.desktop_front.map((data,index) => (
                    <img src={data.src} alt="Frontpage images" />
                ))}
            </div>

            <article id="infobox">
                {<p>{Register.frontpage_article}</p>}
            </article>
        </>
    ) // END RETURN
} // END CONST
export default Frontpage; 