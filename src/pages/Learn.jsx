import { Navbar } from "../components/global/learn/Navbar";
import {Content} from "../components/learn/Content";
import { MobileNavbar } from "../components/global/learn/MobileNavbar";

import { useEffect } from "react";
import { toTop } from "../utils";

const Learn = () => {
    useEffect(() => { toTop() })

    return (
        <div>
            <Navbar />
            <MobileNavbar />
            <Content />
        </div>
    );
}
export default Learn;