import Content from "./Content";
import Footer from "./Footer";
import FooterNavbar from "./FooterNavbar";
import Header from "./Header";
import Navbar from "./Navbar";

const DuoForSchool = () => {
    window.scrollTo( window.x === 0, window.y === 0);

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