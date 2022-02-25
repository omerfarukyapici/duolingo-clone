import { Navbar } from "../Components/Navbar";
import { Content } from "./Content";
import { MobileNavbar } from "../Components/MobileNavbar";

const Learn = () => {
    window.scrollTo( window.x === 0, window.y === 0);


    return(
        <div>
            <Navbar />
            <MobileNavbar />
            <Content />
        </div>
    );
}
export default Learn;