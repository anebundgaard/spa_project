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
            <figure id="mobile_page_hero">
                {
                    <img src={Register.mobile_front[0].src} />
                }
            </figure>

            <article id="textbox">
                <h1>{Register.about[0].headline}</h1>
                <p>{Register.about[0].text}</p>
            </article>

            <figure id="mobile_logo">
                <img src={Register.logo[0].lightblue} />
            </figure>

        </>
    ) // END RETURN
} // END CONST

export default About; 