import Header from "../../about_us/Courses/Header/Header";
import Content from "./Content";
import Footer from "../../about_us/Courses/Footer/Footer";


const CommunityGuide = () => {
    window.scrollTo( window.x === 0, window.y === 0);

    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default CommunityGuide;