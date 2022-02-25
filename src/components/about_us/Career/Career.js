import Navbar from './Navbar';
import Jobs from './Content/Jobs/Jobs';
import Footer from './Footer/Footer';

const Career = () => {
    window.scrollTo( window.x === 0, window.y === 0);

    return (
        <div>
            <Navbar />
            <Jobs />
            <Footer /> 
        </div>
    );
}

export default Career;