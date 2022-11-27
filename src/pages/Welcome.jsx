import "../assets/styles/welcome.css";
import { toTop } from "../utils";
import { useEffect } from "react";
import Header from "../components/welcome/Header";
import Start from "../components/welcome/Start";
import LangSlider from "../components/welcome/LangSlider";
import NumberOne from "../components/welcome/NumberOne";
import Love from "../components/welcome/Love";
import Plus from "../components/welcome/Plus"
import Mobile from "../components/welcome/Mobile";
import School from "../components/welcome/School"
import EngTest from "../components/welcome/EngTest";
import Footer from "../components/welcome/Footer";

const Welcome = () => {
    useEffect(() => { toTop() })

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
export default Welcome;