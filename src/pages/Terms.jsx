import Header from "../components/about_us/Courses/Header/Header";
import Content from '../components/terms/Content';

import { useEffect } from "react";
import { toTop } from "../utils";

const Terms = () => {
    useEffect(() => { toTop() })

    return (
        <>
            <Header />
            <Content />
        </>
    );
}

export default Terms;