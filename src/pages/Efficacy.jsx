import { Header } from "../components/efficacy/Header";
import { OurMission } from "../components/efficacy/OurMission";
import { ListenRead } from "../components/efficacy/ListenRead";
import { Speaking } from "../components/efficacy/Speaking";
import { Levels } from "../components/efficacy/Levels";
import { Contact } from "../components/efficacy/Contact";
import { Footer } from "../components/efficacy/Footer";

import { useEffect } from "react";
import { toTop } from "../utils";

const Efficacy = () => {
    useEffect(() => { toTop() })

    return (
        <div>
            <Header />
            <OurMission />
            <ListenRead />
            <Speaking />
            <Levels />
            <Contact />
            <Footer />
        </div>
    );
}

export default Efficacy;