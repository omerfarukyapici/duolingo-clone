import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const CoursesMain = () => {
    window.scrollTo( window.x === 0, window.y === 0);

    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default CoursesMain;