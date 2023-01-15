import Navbar from "../components/career/Navbar";
import Footer from "../components/career/Footer";
import Faq from "../components/career/Faq";

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