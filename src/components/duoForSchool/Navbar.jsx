import logo from '../../assets/img/duoForSchool/logo.svg';
import burgerNav from '../../assets/img/duoForSchool/burgerNav.svg';

import { useState, useEffect } from 'react';

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false);

    const [burgerMenu, setBurgerMenu] = useState(false);

    useEffect(() => {
        const scrollNavbar = () => {
            if (window.pageYOffset > 500) {
                setShowNavbar(true)

            } else {
                setShowNavbar(false)
            }
        }
        window.addEventListener('scroll', scrollNavbar)
    }, [])


    return (

        <div className="abcNav relative" >

            {/* Show navbar */}

            {showNavbar ?

                <nav className="header navbar flex justify-center fixed w-full bg-white">
                    <div className="container mx-auto flex justify-between p-1.5 w-[1150px]">
                        <div className='p-2.5 pl-6 pt-4'>
                            <a href="#/duoforschool" >
                                <img className="h-8 f-down-logo w-full" alt="" src={logo} />
                            </a>
                        </div>

                        {/* Making Toggle. Toggle = First click show element, second click hide element */}

                        <button onClick={() => setBurgerMenu(!burgerMenu)} className='p-2.5 pl-6 pt-4 abc-burgerNav'>
                            <img className="h-8 f-down-logo w-full" alt="" src={burgerNav} />

                            {/* Element that have to show */}

                            {
                                burgerMenu ?

                                    <div className='absolute left-0 pt-4  w-full'>
                                        <div className=' pt-2 bg-white pl-[28%] pb-2'>
                                            <a href="#/Learn" className="dfs-Link flex justify-center  bg-[#1cb0f6] text-white w-[180px] rounded-xl hover:bg-[#4dc3ff]">
                                                <p className="text-[15px] font-bold leading-3 py-4">GET STARTED</p>
                                            </a>
                                        </div>
                                    </div> : null
                            }

                        </button>

                        <div className=' pt-2 deskApple abc-deskNav'>
                            <a href="#/Learn" className="dfs-Link flex justify-center  bg-[#1cb0f6] text-white w-[180px] rounded-xl hover:bg-[#4dc3ff]">
                                <p className="text-[15px] font-bold leading-3 py-4">GET STARTED</p>
                            </a>
                        </div>
                    </div>
                </nav> : null
            }


        </div>
    );
}

export default Navbar;