import Register from "../../content/register.json";

const Frontpage = () => {
    return (
        <>
        {/* LOGO */}
        <div id="logo">
            {
                Register.logo.map((data,index) => (
                    <img src={data.main} />
                ))
            }
        </div>

        <div id="imgMap">
        {
            Register.desktop_front.map((data,index) => (
                <img src={data.src} />
            ))
        }
        </div>

 
        </>
    )
}

export default Frontpage; 