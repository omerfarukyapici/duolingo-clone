import { Navbar } from "../Components/Navbar";
import { Content } from "./Content";
import { Footer } from "../Components/Footer";
import { MobileNavbar } from "../Components/MobileNavbar";

import './LearnStories.css';

const LearnStories = () => {
    window.scrollTo( window.x === 0, window.y === 0);

    return (
        <div>
            <Navbar />
            <MobileNavbar />
            <Content />

            <div className="learnStoriesFooter flex justify-center pt-14 ">
                <div className="py-10 w-[1000px] border-t-[3px] border-solid border-[#e5e5e5]">
                    <Footer />
                </div>
            </div>


        </div>
    );
}
export default LearnStories;