import { AboutUs } from "../components/research/AboutUs";
import { DataTools } from '../components/research/DataTools';
import { Footer } from '../components/research/Footer';
import { Header } from '../components/research/Header';
import { OurTeam } from '../components/research/OurTeam';
import { Publications } from '../components/research/Publications';

import "../assets/styles/research.css";

import { useEffect } from 'react';
import { toTop } from "../utils";

const ReSearch = () => {
    useEffect(() => { toTop() })

    return (
        <div>
            <Header />
            <AboutUs />
            <Publications />
            <DataTools />
            <OurTeam />
            <Footer />
        </div>
    );
}

export default ReSearch;

