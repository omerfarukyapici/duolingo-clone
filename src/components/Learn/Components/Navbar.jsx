import { NavLinkComp } from "./NavLinkComp";
import navOne from '../../../assets/img/learn/navOne.svg';
import navTwo from '../../../assets/img/learn/navTwo.svg';
import navFour from '../../../assets/img/learn/navFour.svg';
import america from "../../../assets/img/welcome/america.svg"
import navFive from '../../../assets/img/learn/navFive.svg';
import navSix from '../../../assets/img/learn/navSix.svg';
import navSeven from '../../../assets/img/learn/navSeven.svg';
import navEight from '../../../assets/img/learn/navEight.svg';
import userİmg from '../../../assets/img/learn/medium.jpeg';


import './Components.css';

export const Navbar = () => {
    return (
        <div className="relative " >
            <div className="z-[1000] flex justify-center fixed border-b-[2px] border-solid border-[#d6d8da] w-full bg-white">
                <div className="w-full lg:w-[1140px] ">
                    <div className="flex justify-center lg:justify-between">
                        <div className="hidden lg:flex justify-between w-[700px] ">
                            <div className="pt-1">
                                <a href="#/learn" className="flex m-2.5 text-[#afafaf] hover:text-[#878585] font-bold">
                                    <img className="w-[2.2rem] pt-1" alt='' src={navOne} />
                                    <span className="pt-2.5 lg:pt-2 pl-3">LEARN</span>                                    
                                </a>
                            </div>
                            <div className="pt-1">
                                <a href="#/learnstories" className="flex m-2.5 text-[#afafaf] hover:text-[#878585] font-bold">
                                    <img className="w-[2.2rem] pt-1" alt='' src={navTwo} />
                                    <span className="pt-2.5 lg:pt-2 pl-3">STORIES</span>                                    
                                </a>
                            </div>
                            <div className="pt-1"   >
                                <a href="#/shop" className="flex m-2.5 text-[#afafaf] hover:text-[#878585] font-bold">
                                    <img className="w-[2.2rem] pt-1" alt='' src={navFour} />
                                    <span className="pt-2.5 lg:pt-2 pl-3">SHOP</span>                                    
                                </a>
                            </div>


                            <NavLinkComp
                                navLinkCompStyle={"showFeatures m-2.5 text-[#afafaf] hover:text-[#878585]"}
                                linkİmgStyle={"w-[2.2rem] pt-1"}
                                linkStyle={"flex pt-1"}
                                linkName={"MORE"}
                                linkİmg={navFive}


                                /* mobile link click event */
                                morePart={"block lg:hidden absolute top-[4rem] lg:top-[4.6rem] bg-white w-full lg:w-[200px]  left-0 right-0   "}


                                moreFeaturesHoverCompStyle={"moreFeaturesHover -ml-[4rem] w-[220px]"}

                                /* navLinks */
                                navOne={""}
                                navTwo={"hidden"}
                                navThree={"hidden"}
                                navFour={"hidden"}
                                navFive={"hidden"}
                                navSix={"hidden"}
                            />

                        </div>

                        <div className="flex justify-between w-full lg:w-auto ">

                            <NavLinkComp
                                navLinkCompStyle={"showFeatures m-2 lg:m-2.5 text-[#afafaf] hover:text-[#878585]"}
                                linkİmg={america}
                                linkİmgStyle={"w-[2.5rem] mt-2"}

                                /* mobile link click event */
                                morePart={"block lg:hidden absolute top-[4rem] lg:top-[4.6rem] bg-white w-full lg:w-[200px]  left-0 right-0 lg:left-200 lg:right-10  "}
                                navClickOne={""}
                                navClickTwo={"hidden"}
                                navClickThree={"hidden"}
                                navClickFour={"hidden"}
                                navClickFive={"hidden"}

                                moreFeaturesHoverCompStyle={"moreFeaturesHover -ml-[5.5rem] "}


                                /* navLinks */
                                navOne={"hidden"}
                                navTwo={""}
                                navThree={"hidden"}
                                navFour={"hidden"}
                                navFive={"hidden"}
                                navSix={"hidden"}
                            />
                            <NavLinkComp
                                navLinkCompStyle={"showFeatures m-2 lg:m-2.5 text-[#ffc800] hover:text-[#ffc800]"}
                                linkStyle={"flex pt-[.2rem] lg:pt-1"}
                                linkİmgStyle={"pt-2 w-[2.4rem] lg:w-[1.9rem]"}
                                linkName={11}
                                linkİmg={navSix}


                                /* mobile link click event */
                                morePart={"block lg:hidden absolute top-[4rem] lg:top-[4.6rem] bg-white w-full lg:w-[200px]  left-0 right-0 lg:left-200 lg:right-10  "}
                                navClickOne={"hidden"}
                                navClickTwo={""}
                                navClickThree={"hidden"}
                                navClickFour={"hidden"}
                                navClickFive={"hidden"}



                                moreFeaturesHoverCompStyle={"moreFeaturesHover -ml-[12rem] w-[390px]"}

                                /* navLinks */
                                navOne={"hidden"}
                                navTwo={"hidden"}
                                navThree={"flex p-5"}
                                navFour={"hidden"}
                                navFive={"hidden"}
                                navSix={"hidden"}
                            />
                            <NavLinkComp
                                navLinkCompStyle={"showFeatures m-2 lg:m-2.5 text-[#ff9600] hover:text-[#ff9600]"}
                                linkStyle={"flex pt-[.2rem] lg:pt-1"}
                                linkName={1}
                                linkİmg={navSeven}
                                linkİmgStyle={"pt-1.5 w-[1.8rem] lg:w-[1.5rem]"}

                                /* mobile link click event */
                                morePart={"block lg:hidden absolute top-[4rem] lg:top-[4.6rem] bg-white w-full lg:w-[200px]  left-0 right-0 lg:left-200 lg:right-10  "}
                                navClickOne={"hidden"}
                                navClickTwo={"hidden"}
                                navClickThree={""}
                                navClickFour={"hidden"}
                                navClickFive={"hidden"}



                                
                                moreFeaturesHoverCompStyle={"moreFeaturesHover -ml-[11.5rem] w-[400px] p-5"}



                                /* navLinks */
                                navOne={"hidden"}
                                navTwo={"hidden"}
                                navThree={"hidden"}
                                navFour={"navFour"}
                                navFive={"hidden"}
                                navSix={"hidden"}
                            />

                            <NavLinkComp
                                navLinkCompStyle={"showFeatures m-2 lg:m-2.5 text-[#fc4848] hover:text-[#fc4848] "}
                                linkStyle={"flex pt-[.2rem] lg:pt-1"}
                                linkName={2}
                                linkİmg={navEight}
                                linkİmgStyle={"pt-1.5 w-[1.8rem] lg:w-[1.5rem]"}

                                /* mobile link click event */
                                morePart={"block lg:hidden absolute top-[4rem] lg:top-[4.6rem] bg-white w-full lg:w-[200px]  left-0 right-0 lg:left-200 lg:right-10  "}
                                navClickOne={"hidden"}
                                navClickTwo={"hidden"}
                                navClickThree={"hidden"}
                                navClickFour={""}
                                navClickFive={"hidden"}

                                moreFeaturesHoverCompStyle={"moreFeaturesHover -ml-[14rem] w-[350px]"}
                                linkTwoStyle={""}



                                /* navLinks */
                                navOne={"hidden"}
                                navTwo={"hidden"}
                                navThree={"hidden"}
                                navFour={"hidden"}
                                navFive={"flex p-3 pt-0 "}
                                navSix={"hidden"}
                            />


                            <NavLinkComp
                                navLinkCompStyle={"showFeatures m-2 lg:m-2.5 text-[#afafaf] hidden lg:block hover:text-[#878585]"}
                                linkStyle={""}
                                linkİmgStyle={"rounded-[2rem] mt-2 w-[2.2rem]"}
                                linkName={""}
                                linkİmg={userİmg}

                                /* mobile link click event */
                                morePart={"block lg:hidden absolute top-[4rem] lg:top-[4.6rem] bg-white w-full lg:w-[200px]  left-0 right-0 lg:left-200 lg:right-10  "}
                                navClickOne={"hidden"}
                                navClickTwo={"hidden"}
                                navClickThree={"hidden"}
                                navClickFour={"hidden"}
                                navClickFive={""}


                                moreFeaturesHoverCompStyle={"moreFeaturesHover -ml-[22.5rem] w-[400px]"}


                                /* navLinks */
                                navOne={"hidden"}
                                navTwo={"hidden"}
                                navThree={"hidden"}
                                navFour={"hidden"}
                                navFive={"hidden"}
                                navSix={""}
                            />

















                            <NavLinkComp
                                navLinkCompStyle={"showFeatures m-2 lg:m-2.5 text-[#afafaf] block lg:hidden hover:text-[#878585]"}
                                linkİmgStyle={"w-[2.2rem] pt-1.5"}
                                linkStyle={"flex pt-1"}
                                linkName={""}
                                linkİmg={navFive}

                                morePart={"block lg:hidden absolute top-[4rem] lg:top-[4.6rem] bg-white w-full lg:w-[200px]  left-0 right-0 lg:left-200 lg:right-10  "}
                                navClickOne={"hidden"}
                                navClickTwo={"hidden"}
                                navClickThree={"hidden"}
                                navClickFour={"hidden"}
                                navClickFive={""}



                                moreFeaturesHoverCompStyle={"hidden"}


                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}