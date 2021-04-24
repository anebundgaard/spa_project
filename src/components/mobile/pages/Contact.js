import Register from "../../content/register.json"; 

const Contact = () => {
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
            {
                <img src={Register.mobile_front[2].src} />
            }
        </figure>

        <article id="textbox">
            <h1>{Register.contact[0].headline}</h1>
            <p>{Register.contact[0].text}</p>
        </article>

        <figure id="imgbox">
            {
             Register.smallImg.map((data,index) => (
                 <img src={data.src} />
             ))   
            }
            {
             Register.smallImg.map((data,index) => (
                 <p>{data.link}</p>
             ))   
            }
        </figure>

        <figure id="mobile_logo">
            <img src={Register.logo[0].nude} />
        </figure>

    </>
    ) // END RETURN
} // END CONST

export default Contact; 