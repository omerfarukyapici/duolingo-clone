import { Content } from "../components/courses/Content";
import { Footer } from "../components/courses/Footer";
import { Header } from "../components/courses/Header";
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