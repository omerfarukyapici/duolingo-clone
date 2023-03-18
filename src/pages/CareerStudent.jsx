import Navbar from "../components/career/Navbar";
import Students from "../components/career/Students";
import Footer from "../components/career/Footer";

import { toTop } from "../utils";
import { useEffect } from "react";

const CareerStudent = () => {
    useEffect(() => { toTop() });
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