import Content from "../components/about_us/Courses/Content/Content";
import Footer from "../components/about_us/Courses/Footer/Footer";
import Header from "../components/about_us/Courses/Header/Header";
import { useEffect } from "react";
import { toTop } from "../utils";

const CoursesMain = () => {
    useEffect(() => { toTop() })

    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default CoursesMain;