import Navbar from './Navbar';
import Faq from './Content/Faq/Faq';
import Footer from './Footer/Footer';

const CareerFaq = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-16'>
                <Faq />
            </div>
            <Footer />
        </div>
    );
}

export default CareerFaq;