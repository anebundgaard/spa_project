import React, {useEffect} from "react"; 

// IMPORT OF COMPONENTS
import Register from "../../content/register.json"; 

const Contact = () => {
    // MENUBAR HOVER
    useEffect(() => {
        document.querySelector(".navButton3").style.display="block";
        document.querySelector(".navButton3").style.background="routerButtonColor[e.currentTarget.dataset.index]";
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
            <figure id="mobile_page_hero">
                {<img src={Register.mobile_front[2].src} alt="Get in touch" />}
            </figure>

            <article id="textbox">
                <h1>{Register.contact[0].headline}</h1>
                <p>{Register.contact[0].text}</p>
            </article>

            <figure id="imgbox">
                {Register.smallImg.map((data,index) => (
                    <img src={data.src} alt="The co-workers of Spa" />
                ))}
                {Register.smallImg.map((data,index) => (
                    <p>{data.link}</p>
                ))}
            </figure>

            <figure id="mobile_logo">
                <img src={Register.logo[0].nude} alt="Spa nude logo" />
            </figure>
        </>
    ) // END RETURN
} // END CONST

export default Contact; 