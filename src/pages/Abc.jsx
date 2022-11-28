import Contact from '../components/abc/Contact';
import Footer from '../components/abc/Footer';
import Header from '../components/abc/Header';
import Navbar from '../components/abc/Navbar';
import Printable from '../components/abc/Printable';
import WayToLearn from '../components/abc/WayToLearn';

import "../assets/styles/abc.css";

import { useEffect } from "react";
import { toTop } from "../utils/";

const Abc = () => {
    useEffect(() => {
        toTop()
    })

    return (
        <>
            <Navbar />
            <Header />
            <WayToLearn />
            <Printable />
            <Contact />
            <Footer />
        </>
    );
}

export default Abc;