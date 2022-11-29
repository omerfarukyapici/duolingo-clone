import { Navbar } from "../components/Learn/Components/Navbar";
import { Content } from "../components/shop/Content"
import { MobileNavbar } from "../components/Learn/Components/MobileNavbar";

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