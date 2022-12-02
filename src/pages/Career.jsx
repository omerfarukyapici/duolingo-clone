import Navbar from '../components/career/Navbar';
import Jobs from '../components/career/Content';
import Footer from '../components/career/Footer';

import { useEffect } from 'react';
import { toTop } from "../utils";

const Career = () => {
    useEffect(() => { toTop() });

    return (
        <div>
            <Navbar />
            <Jobs />
            <Footer />
        </div>
    );
}

export default Career;