import React, {useState, useEffect} from "react"; 
// IMPORT OF COMPONENTS
import DesktopView from "../desktop";
import MobileView from "../mobile"; 

const windowDims = () => ({
    height:window.innerHeight,
    width:window.innerWidth
})

const Content = () => {

    const [dimensions, setDimensions] = useState(windowDims());

    useEffect(() => {
        const handleResize = () => {
            setDimensions(windowDims());
        } // end handleResize

        window.addEventListener('resize',handleResize); 

        return () => {
            window.removeEventListener('resize',handleResize); 
        } // END RETURN
    },[]); // END USEEFFECTS

    const breakpoint = 600;

    return dimensions.width < breakpoint ? <MobileView /> : <DesktopView />; 

} // END CONTENT

export default Content; 