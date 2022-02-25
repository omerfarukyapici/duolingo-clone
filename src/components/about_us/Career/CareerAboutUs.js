import Navbar from './Navbar';
import AboutUs from './Content/AboutUs/AboutUs';
import Footer from './Footer/Footer';

const CareerAboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-16'>
                <AboutUs />
            </div>
            <Footer />
        </div>
    );
}

export default CareerAboutUs;