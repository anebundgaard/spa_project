import Register from "../../content/register.json";
const Contact = () => {
    // BACKGROUNC COLOR
    if ((window.onload) = (e) => {
        document.body.style.background = "#ffb472"; 
    }) 
    
    if ((window.onclick) = (e) => {
        document.body.style.background = "#ffb472"; 
    })

    return (
        <>
        <div id="desktop_page_hero">
            <img src={Register.desktop_menu[0].getintouch} />
        </div>

        {
            <article id="textbox">
                <h1>{Register.contact[0].headline}</h1>
                <p>{Register.contact[0].text}</p>
            </article>
        }

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

        {
            Register.smallImg.forEach(item => {
                console.log(item); 
            })
        }

        <article id="infobox">
            <p>{Register.contact[0].box}</p>
        </article>
        </>
    ) // END RETURN
} // END CONST

export default Contact; 