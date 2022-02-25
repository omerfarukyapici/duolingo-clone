import logo from '../Productsİmg/abcLogo.svg';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Printable from './Printable';
import WayToLearn from './WayToLearn';

const Abc = () => {
    window.scrollTo( window.x === 0, window.y === 0);

    return (
        <div>
            <Navbar />
            <Header />
            <WayToLearn />
            <Printable />
            <Contact />
            <Footer />
        </div>
    );
}

export default Abc;