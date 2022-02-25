import Navbar from './Navbar/Navbar';
import Our from './Our/Our';
import OurProducts from './OurProducts/OurProducts';
import Releases from './ReNews/Releases';
import News from './ReNews/News';
import PressKit from './PressKit';
import ContactUs from './ContactUs';
import Footer from '../Efficacy/CompAssets/Footer'

const Press = () => {
    window.scrollTo( window.x === 0, window.y === 0);



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