import Register from "../../content/register.json";

const Frontpage = () => {
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
        {
            Register.desktop_front.map((data,index) => (
                <img src={data.src} />
            ))
        }
        </div>

        <article id="infobox">
            {
                <p>{Register.frontpage_article}</p>
            }
        </article>

        </>
    ) // END RETURN
} // END CONST

export default Frontpage; 