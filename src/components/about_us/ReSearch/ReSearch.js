import AboutUs from './AboutUs';
import DataTools from './DataTools';
import Footer from './Footer';
import Header from './Header';
import OurTeam from './OurTeam';
import Publications from './Publications';
import './ReSearch.css';

const ReSearch = () => {
    window.scrollTo( window.x === 0, window.y === 0);


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

