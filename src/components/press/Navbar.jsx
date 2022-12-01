import logo from "../../assets/img/press/logo.svg";
import "../../assets/styles/press.css";
import { NavComp } from "./NavComp";

import { useState } from 'react';

export const Navbar = () => {

    const [hmbrMenu, setHmbrMenu] = useState(false);

    return (
        <div className="PressNavbar relative " >
            <nav className="header navbar flex justify-center fixed w-full">
                <div className="container mx-auto flex justify-between  w-[1150px]">
                    <div className='p-2.5 pl-6 pt-5'>
                        <a href="#/press" >
                            <img className="h-8 f-down-logo w-[15rem]" alt="" src={logo} />
                        </a>
                    </div>

                    {/* Humburger menu */}

                    <div className="block md:hidden pt-5 mr-2">
                        <button onClick={() => setHmbrMenu(!hmbrMenu)} className="humburgerMenu">
                            <img src="" alt='' />
                        </button>

                        {
                            hmbrMenu ?
                                <div className="absolute left-0 pt-5 bg-white right-0">
                                    <div className=' w-[1rem] h-[1rem] absolute right-4 top-3 rotate-45 border-solid border-[#e1e3e4] border-[2px]'></div>

                                    <div className='relative bg-white'>
                                        <div className=" hmbr">
                                            <a href="#/press" >
                                                About us
                                            </a>
                                        </div>
                                        <div className=" hmbr">
                                            <a href="#/press">
                                                News
                                            </a>
                                        </div>
                                        <div className=" hmbr">
                                            <a href="#/press" >
                                                Press Kit
                                            </a>
                                        </div>
                                        <div className=" hmbr">
                                            <a href="#/press">
                                                Contact
                                            </a>
                                        </div>
                                        <div className=" hmbr">
                                            <a href="#/press" >
                                                Blog
                                            </a>
                                        </div>
                                    </div>

                                </div> : null
                        }


                    </div>



                    <div className="hidden md:flex justify-between w-[430px] mr-6 xl:mr-0">
                        <NavComp
                            linkName="ABOUT US"
                            linkAdress="#/press"
                        />
                        <NavComp
                            linkName="NEWS"
                            linkAdress="#/press"
                        />
                        <NavComp
                            linkName="PRESS KİT"
                            linkAdress="#/press"
                        />
                        <NavComp
                            linkName="CONTACT"
                            linkAdress="#/press"
                        />
                        <NavComp
                            linkName="BLOG"
                            linkAdress="#/press"
                        />
                    </div>
                    <div className="hidden xl:flex justify-between w-[190px] PressNavSocial">
                        <div className="pt-4 pr-6">
                            <span className="socline"></span>
                        </div>
                        <div className="pt-6">
                            <a href="https://twitter.com/duolingo" target={"_blank"} className=" twitter"></a>
                        </div>
                        <div className="pt-6">
                            <a href="https://www.instagram.com/duolingo/" target={"_blank"} className="instagram" ></a>
                        </div>
                        <div className="pt-6">
                            <a href="https://www.facebook.com/duolingo" target={"_blank"} className="facebook" ></a>
                        </div>
                        <div className="pt-6">
                            <a href="#/press" className="linkedin" ></a>
                        </div>
                    </div>


                </div>
            </nav>
        </div>
    );
}
