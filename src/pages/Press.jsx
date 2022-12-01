import { Navbar } from "../components/press/Navbar";
import { Our } from '../components/press/Our';
import { OurProducts } from '../components/press/OurProducts';
import { Releases } from '../components/press/Releases';
import { News } from '../components/press/News';
import { PressKit } from '../components/press/PressKit';
import { ContactUs } from '../components/press/ContactUs';
import { Footer } from "../components/efficacy/Footer";

import { useEffect } from 'react';
import { toTop } from "../utils";

const Press = () => {
    useEffect(() => { toTop() })

    return (
        <div>
            <Navbar />
            <Our />
            <OurProducts />
            <Releases />
            <News />
            <PressKit />
            <ContactUs />
            <div className='pb-[2rem] md:pb-[3rem]'>
                <Footer />
            </div>
        </div>
    );
}
export default Press;