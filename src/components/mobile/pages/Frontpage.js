import React, {useEffect} from "react"; 
// IMPORT OF COMPONENTS
import Register from "../../content/register.json"; 

const Frontpage = () => {
    // MENUBAR HOVER
    useEffect(() => {
        document.querySelector(".navi0").style.display="block";
        document.querySelector(".navi0").style.background="routerButtonColor[e.currentTarget.dataset.index]";
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
            <figure id="frontpage_hero_mobile">
                {Register.mobile_front.map((data,index) => (
                        <img src={data.src} alt="Frontpage images" />
                    ))}
            </figure>

            <article id="infobox">
                <p>{Register.frontpage_article}</p>
            </article>
        </>
    ) // END RETURN
} // END CONST

export default Frontpage; 