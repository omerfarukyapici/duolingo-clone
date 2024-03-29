import { Navbar } from "../components/global/learn/Navbar";
import { Content } from "../components/shop/Content"
import { MobileNavbar } from "../components/global/learn/MobileNavbar";
import "../assets/styles/shop.css";

import { useEffect } from "react";
import { toTop } from "../utils";

const Shop = () => {
    useEffect(() => { toTop() });

    return (
        <div>
            <Navbar />
            <MobileNavbar />
            <Content />
        </div>
    );
}
export default Shop;