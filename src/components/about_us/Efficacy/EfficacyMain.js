import Contact from "./CompAssets/Contact";
import Footer from "./CompAssets/Footer";
import Header from "./CompAssets/Header";
import Levels from "./CompAssets/Levels";
import ListenRead from "./CompAssets/ListenRead";
import OurMission from "./CompAssets/OurMission";
import Speaking from "./CompAssets/Speaking";

const Efficacy = () => {
    window.scrollTo( window.x === 0, window.y === 0);

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