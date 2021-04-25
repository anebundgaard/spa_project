// IMPORT OF COMPONENTS
import Register from "../../content/register.json"; 

const Maintainable = () => {
    // BACKGROUND COLOR
    if ((window.onload) = (e) => {
        document.body.style.background = "#bfddef"; 
    }) 
    if ((window.onclick) = (e) => {
        document.body.style.background = "#bfddef"; 
    })

    return (
        <>
            <figure id="mobile_page_hero">
                {<img src={Register.mobile_front[1].src} alt="Maintainable" />}
            </figure>

            <article id="textbox">
                <h1>{Register.maintainable[0].headline}</h1>
                <p>{Register.maintainable[0].text}</p>
            </article>

            <figure id="mobile_logo">
                <img src={Register.logo[0].lightblue} alt="Spa lightblue logo" />
            </figure>
        </>
    ) // END RETURN
} // END CONST
export default Maintainable; 