import Navbar from "../components/career/Navbar";
import Students from "../components/career/Students";
import Footer from "../components/career/Footer";

const CareerStudent = () => {
    return (
        <>
            <Navbar />
            <div className="pt-16">
                <Students />
            </div>
            <Footer />
        </>
    )
}
export default CareerStudent;