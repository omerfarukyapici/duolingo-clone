import Navbar from '../components/about_us/Career/Navbar';
import Jobs from '../components/about_us/Career/Jobs';
import Footer from '../components/about_us/Career/Footer';

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