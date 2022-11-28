import Navbar from "../components/duoForSchool/Navbar";
import Header from "../components/duoForSchool/Header";
import Content from "../components/duoForSchool/Content";
import FooterNavbar from "../components/duoForSchool/FooterNavbar";
import Footer from "../components/duoForSchool/Footer";

import { useEffect } from "react";
import { toTop } from "../utils";

const DuoForSchool = () => {
    useEffect(() => {
        toTop()
    })

    return (
        <div>
            <Navbar />
            <Header />
            <Content />
            <Footer />
            <FooterNavbar />
        </div>
    );
}

export default DuoForSchool;