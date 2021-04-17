import Register from "../../content/register.json";

const Frontpage = () => {
    return (
        <>

        <div id="frontImgMap">
        {
            Register.desktop_front.map((data,index) => (
                <img src={data.src} />
            ))
        }
        </div>

        <article>
            {
                <p>{Register.frontpage_article}</p>
            }
        </article>

        </>
    )
}

export default Frontpage; 