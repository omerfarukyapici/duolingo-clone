import Navbar from './Navbar';
import Students from './Content/Students/Students';
import Footer from './Footer/Footer';

const CareerStudents = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-16'>
                <Students />
            </div>
            <Footer />
        </div>
    );
}

export default CareerStudents;