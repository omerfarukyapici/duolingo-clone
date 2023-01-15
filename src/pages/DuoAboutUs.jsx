import "../assets/styles/duoAboutUs.css";
import { Header } from "../components/courses/Header";
import { Footer } from "../components/courses/Footer";

/* 
About Us Page {
    Mission,
    Approach,
    Team,
    ContactUs
}
*/

/* 
import ContactUs from './ContactUs.js';
import Approach from './Approach.js';
import Mission from "./mission";
*/
import Team from "../components/duoAboutUs/Team";




const DuoAboutUs = () => {
    window.scrollTo(window.x === 0, window.y === 0);



    return (
        <div>
            <Header />

            <div className="flex justify-center px-4">
                <div className="w-[900px]">

                    {/* Tabs */}

                    <div className="fakeTabs">
                        <h1 className="text-[31px] font-bold py-[2rem] pt-[8rem]">About Us</h1>

                        <div className="flex py-[1rem]">
                            <div className=" flex flex-wrap ">
                                <p className="m-2 ml-0"><a href="#/duoaboutus" >Mission</a></p>
                                <p className="m-2"><a href="#/duoaboutus" >Apporoach</a></p>
                                <p className="m-2"><a href="#/duoaboutus" >Team</a></p>
                                <p className="m-2"><a href="#/career" >Careers</a></p>
                                <p className="m-2"><a href="#/research" >Research</a></p>
                                <p className="m-2"><a href="#/press" >Press</a></p>
                                <p className="m-2"><a href="#/duoaboutus" >Contact Us</a></p>
                            </div>
                        </div>
                    </div>

                    {/*Tabs Content */}

                    <div className="flex justify-center">
                        <div>

                            {/* 
                            
                            - DONE:
                            <ContactUs />
                            <Approach />
                            <Mission />

                            */}

                            <Team />

                        </div>
                    </div>

                </div>
            </div>

            <Footer />

        </div>
    );
}

export default DuoAboutUs;