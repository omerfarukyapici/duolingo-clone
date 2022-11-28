import Header from "../components/about_us/Courses/Header/Header";
import Content from "../components/communityGuide/Content";
import Footer from "../components/about_us/Courses/Footer/Footer";

import { useEffect } from "react";
import { toTop } from "../utils";

const CommunityGuide = () => {
    useEffect(() => { toTop() });

    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default CommunityGuide;