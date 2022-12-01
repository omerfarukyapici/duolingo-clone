/* import Header from "../components/about_us/Courses/Header/Header"; */
import { Header } from "../components/courses/Header";
import Content from "../components/communityGuide/Content";
import { Footer } from "../components/courses/Footer";

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