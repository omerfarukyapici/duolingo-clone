import Header from "../components/about_us/Courses/Header/Header";
import Content from "../components/privacy/Content";

import { useEffect } from 'react';
import { toTop } from "../utils";

const Privacy = () => {
    useEffect(() => { toTop() })

    return (
        <div>
            <Header />
            <Content />
        </div>
    );
}

export default Privacy;