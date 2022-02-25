/* Use press navbar component */
import logo from './Careerİmg/logo.svg';
import NavComp from '../Press/Navbar/NavComp';

import { useState } from 'react';

const Navbar = () => {

    const [hmbrMenu, setHmbrMenu] = useState(false);

    return (
        <div className="PressNavbar relative " >
            <nav className="header navbar flex justify-center fixed w-full">
                <div className="container mx-auto flex justify-between  w-[1150px]">
                    <div className='p-2.5 pl-6 pt-6'>
                        <a href="#/career" >
                            <img className="h-7 f-down-logo w-[15rem]" alt="" src={logo} />
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
                                            <a href="#/careeraboutus" >
                                                About us
                                            </a>
                                        </div>
                                        <div className=" hmbr">
                                            <a href="#/career" >
                                                Jobs
                                            </a>
                                        </div>
                                        <div className=" hmbr">
                                            <a href="#/careerstudents">
                                                Students
                                            </a>
                                        </div>
                                        <div className=" hmbr">
                                            <a href="#/careerfaq" >
                                                Faq
                                            </a>
                                        </div>
                                    </div>

                                </div> : null
                        }


                    </div>



                    <div className="hidden md:flex justify-between relative -right-0  xl:-right-24  w-[330px] mr-6 xl:mr-0">
                        <NavComp
                            linkName="JOBS"
                            linkAdress="#/career"
                        />
                        <NavComp
                            linkName="ABOUT US"
                            linkAdress="#/careeraboutus"
                        />
                        <NavComp
                            linkName="STUDENTS"
                            linkAdress="#/careerstudents"
                        />
                        <NavComp
                            linkName="FAQ"
                            linkAdress="#/careerfaq"
                        />
                        
                    </div>
                    <div className="hidden xl:flex justify-between w-[190px] PressNavSocial">
                        <div className="pt-4 pr-6">
                            <span className="socline"></span>
                        </div>
                        <div className="pt-6">
                            <a href="https://twitter.com/duolingo" target="_blank" className=" twitter"></a>
                        </div>
                        <div className="pt-6">
                            <a href="https://www.instagram.com/duolingo/" target="_blank" className="instagram" ></a>
                        </div>
                        <div className="pt-6">
                            <a href="https://www.facebook.com/duolingo" target="_blank" className="facebook" ></a>
                        </div>
                        <div className="pt-6">
                            <a href="#/career" className="linkedin" ></a>
                        </div>
                    </div>


                </div>
            </nav>
        </div>
    );
}

export default Navbar;