import React from "react";
import Header from "../welcome_page/Header/Header";
import Start from "./Start/Start";
import LangSlider from "./LangSlider/LangSlider";
import NumberOne from "./NumberOne/NumberOne";
import Love from "./Love/Love";
import Plus from "./Plus/Plus"
import Mobile from "./Mobile/Mobile";
import School from "./School/School"
import EngTest from "./EngTest/EngTest";
import Footer from "./Footer/Footer";


const WelcomePage = () => {
    window.scrollTo(window.x === 0, window.y === 0);

    return (
        <>
            <Header />
            <Start />
            <LangSlider />
            <NumberOne />
            <Love />
            <Plus />
            <Mobile />
            <School />
            <EngTest />
            <Footer />
        </>
    );

}

export default WelcomePage;