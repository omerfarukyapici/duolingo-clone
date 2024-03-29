import { Navbar } from "../components/global/learn/Navbar";
import { Content } from "../components/learnStories/Content";
import { Footer } from "../components/global/learn/Footer";
import { MobileNavbar } from "../components/global/learn/MobileNavbar";

import "../assets/styles/learnStories.css";
import { useEffect } from "react";
import { toTop } from "../utils";

const LearnStories = () => {
    useEffect(() => { toTop() })

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