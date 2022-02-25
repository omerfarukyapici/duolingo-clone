import './Components.css';
import { useState } from 'react';

import navFiveİmg from '../Learnİmg/lingot.svg';
import checkİmg from '../Learnİmg/checkİcon.svg';
import lit from '../Learnİmg/lit.svg';
import crown from '../Learnİmg/navSix.svg';
import navTwoİmg from '../Learnİmg/navTwoİmg.svg';
import en from '../../welcome_page/welcome_page_img/america.svg';

import ping from '../Learnİmg/ping.svg';
import world from '../Learnİmg/world.svg';
import book from '../Learnİmg/book.svg';


export const NavLinkComp = ({
    navLinkCompStyle,
    linkName,
    linkİmg,
    linkAddress,
    linkStyle,
    divStyle,
    linkİmgStyle,
    morePart,
    moreFeaturesHoverCompStyle,

    navOne,
    navTwo,
    navThree,
    navFour,
    navFive,
    navSix,


    navClickOne,
    navClickTwo,
    navClickThree,
    navClickFour,
    navClickFive
}) => {


    const [showMore, setShowMore] = useState(false);


    return (
        <div className={navLinkCompStyle}>
            <div className={divStyle}>

                <div onClick={() => { setShowMore(!showMore) }} className={linkStyle} href={linkAddress} >
                    <div>
                        <img className={linkİmgStyle} alt='' src={linkİmg} />
                    </div>
                    <div className="pt-2.5 lg:pt-2 pl-3 ">
                        <p className=" font-bold"> {linkName} </p>
                    </div>





                    {/* More features of links (hover) */}
                    <div className={moreFeaturesHoverCompStyle}>






                        {/* NavOne */}
                        <div className={navOne}>
                            <ul>
                                <div className='bg-white  hover:bg-[#e5e5e5] pl-1 px-3.5 py-[.6rem]'>
                                    <a className='flex p-1 ' href="#/learn" >
                                        <img className='w-[2.2rem]' alt='' src={ping} />
                                        <p className='pl-2 pt-1 text-[#4b4b4b]'>Events</p>
                                    </a>
                                </div>
                                <div className='bg-white hover:bg-[#e5e5e5] pl-1 px-3.5 py-[.6rem] border-solid border-[#e5e5e5] border-t-[2px]'>
                                    <a className='flex p-1' href="#/duoforschool" >
                                        <img className='w-[2.2rem]' alt='' src={world} />
                                        <p className='pl-2 pt-1 text-[#4b4b4b]'>Schools</p>
                                    </a>
                                </div>
                                <div className='bg-white hover:bg-[#e5e5e5] pl-1 px-3.5 py-[.6rem] border-solid border-[#e5e5e5] border-t-[2px]'>
                                    <a className='flex p-1' href="#/learn" >
                                        <img className='w-[2.2rem]' alt='' src={book} />
                                        <p className='pl-2 pt-1 text-[#4b4b4b]'>Dictionary</p>
                                    </a>
                                </div>
                            </ul>
                        </div>





                        {/* NavTwo */}
                        <div className={navTwo}>
                            <ul>
                                <div className='bg-white hover:bg-[#e5e5e5] px-3.5 py-2.5'>
                                    <a className='flex p-1' href="#/learn" >
                                        <img className='w-[2.2rem]' alt='' src={en} />
                                        <p className='pl-2'>English</p>
                                    </a>
                                </div>
                                <li >
                                    <a className='flex p-1' href="#/learn" >
                                        <img src={navTwoİmg} alt='' />
                                        <p className='pl-2'>Add a new course</p>
                                    </a>
                                </li>
                            </ul>
                        </div>





                        {/* NavThree */}
                        <div className={navThree}>
                            <div className='pr-3'>
                                <img className='w-[6rem]' alt='' src={crown} />
                            </div>
                            <div>
                                <p className='text-[#3c3c3c] text-[1.3rem]'>Crowns</p>
                                <p className='py-2 pt-0 text-[#8d8b8b] font-medium'>Level up your skills to earn Crowns!</p>
                            </div>
                        </div>





                        {/* NavFour */}
                        <div className={navFour}>
                            <div className='flex'>
                                <div className='pr-4'>
                                    <img className='w-[8rem]' alt='' src={lit} />
                                </div>
                                <div className='pt-4'>
                                    <p className='text-[#3c3c3c] text-[1.3rem]'>Streak</p>
                                    <p className='text-[#8d8b8b] font-medium'>Complete a lesson everyday to build your streak</p>
                                </div>
                            </div>
                            <div className='flex justify-center checkPart'>
                                <div className='flex text-[#afafaf] text-center'>
                                    <div className='p-3'>
                                        <p>Su</p>
                                        <img src={checkİmg} alt='' />
                                    </div>
                                    <div className='p-3'>
                                        <p>M</p>
                                        <img src={checkİmg} alt='' />
                                    </div>
                                    <div className='p-3'>
                                        <p>Tu</p>
                                        <img src={checkİmg} alt='' />
                                    </div>
                                    <div className='p-3'>
                                        <p>W</p>
                                        <img src={checkİmg} alt='' />
                                    </div>
                                    <div className='p-3'>
                                        <p>Th</p>
                                        <img src={checkİmg} alt='' />
                                    </div>
                                </div>

                            </div>
                        </div>




                        {/* NavFive */}
                        <div className={navFive}>
                            <div>
                                <img src={navFiveİmg} alt='' />
                            </div>
                            <div className='pt-5'>
                                <p className='text-[#3c3c3c] text-[1.3rem]'>Lingots</p>
                                <p className='py-2 text-[#8d8b8b] font-medium'>You have 2 lingots</p>
                                <div>
                                    <a className='text-[#1cb0f6]' href="#/Shop" >GO TO SHOP</a>
                                </div>
                            </div>
                        </div>




                        {/* NavSix */}
                        <div className={navSix}>
                            <ul className=''>
                                <li >
                                    <a>
                                        Account
                                    </a>
                                </li>
                                <li >
                                    <a href="#/learn" >
                                        Create a profile
                                    </a>
                                </li>
                                <li>
                                    <a href="#/learn" >
                                        Settings
                                    </a>
                                </li>
                                <li >
                                    <a href="#/learn" >
                                        Help
                                    </a>
                                </li>
                                <li >
                                    <a href="#/" >
                                        Sing Out
                                    </a>
                                </li>
                            </ul>
                        </div>



                    </div>







                    {/* More features of links (click) */}
                    {
                        showMore ?

                            <div className={morePart}>



                                <div className={navClickOne}>
                                    <ul className='flex border-[#e5e5e5] border-y-[2px]'>
                                        <div className='bg-white hover:bg-[#e5e5e5] px-3.5 '>
                                            <a className=' p-1' href="#/learn" >
                                                <img className='w-[4rem]' alt='' src={en} />
                                                <p className='pl-1'>English</p>
                                            </a>
                                        </div>
                                        <li >
                                            <a className=' p-1' href="#/learn" >
                                                <img className='w-[4rem]' src={navTwoİmg} alt='' />
                                                <p className='pl-1'>Courses</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>




                                <div className={navClickTwo}>
                                    <div className='flex justify-center border-[#e5e5e5] border-y-[2px]'>
                                        <div className='flex '>
                                            <div className='pr-3'>
                                                <img className='w-[6rem]' alt='' src={crown} />
                                            </div>
                                            <div>
                                                <p className='text-[#3c3c3c] text-[1.3rem]'>Crowns</p>
                                                <p className='py-2 pt-0 text-[#8d8b8b] font-medium'>Level up your skills to earn Crowns!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className={navClickThree}>
                                    <div className='border-solid border-[#e5e5e5] border-y-[2px] px-2'>
                                        <div className='flex justify-center'>
                                            <div className='flex'>
                                                <div className='pr-4'>
                                                    <img className='w-[8rem]' alt='' src={lit} />
                                                </div>
                                                <div className='pt-4'>
                                                    <p className='text-[#3c3c3c] text-[1.3rem]'>Streak</p>
                                                    <p className='text-[#8d8b8b] font-medium'>Complete a lesson everyday to build your streak</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='flex justify-center checkPart'>
                                            <div className='flex text-[#afafaf] text-center'>
                                                <div className='p-3'>
                                                    <p>Su</p>
                                                    <img src={checkİmg} alt='' />
                                                </div>
                                                <div className='p-3'>
                                                    <p>M</p>
                                                    <img src={checkİmg} alt='' />
                                                </div>
                                                <div className='p-3'>
                                                    <p>Tu</p>
                                                    <img src={checkİmg} alt='' />
                                                </div>
                                                <div className='p-3'>
                                                    <p>W</p>
                                                    <img src={checkİmg} alt='' />
                                                </div>
                                                <div className='p-3'>
                                                    <p>Th</p>
                                                    <img src={checkİmg} alt='' />
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>



                                <div className={navClickFour}>
                                    <div className='flex justify-center border-solid border-[#e5e5e5] border-y-[2px]'>
                                        <div className='flex'>
                                            <div>
                                                <img src={navFiveİmg} alt='' />
                                            </div>
                                            <div className='pt-5'>
                                                <p className='text-[#3c3c3c] text-[1.3rem] font-bold'>Lingots</p>
                                                <p className='py-2 text-[#8d8b8b] font-medium'>You have 2 lingots</p>
                                                <div>
                                                    <a className='text-[#1cb0f6] font-medium' href="/shop" >GO TO SHOP</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className={navClickFive}>
                                    <ul>
                                        <div className='bg-white  hover:bg-[#e5e5e5] pl-1 px-3.5 py-[.4rem] border-solid border-[#e5e5e5] border-t-[2px]'>
                                            <a className='flex p-1 ' href="#/learn" >
                                                <img className='w-[2.2rem]' alt='' src={ping} />
                                                <p className='pl-2 pt-1'>English</p>
                                            </a>
                                        </div>
                                        <div className='bg-white hover:bg-[#e5e5e5] pl-1 px-3.5 py-[.4rem] border-solid border-[#e5e5e5] border-y-[2px]'>
                                            <a className='flex p-1' href="#/learn" >
                                                <img className='w-[2.2rem]' alt='' src={world} />
                                                <p className='pl-2 pt-1'>English</p>
                                            </a>
                                        </div>
                                    </ul>
                                </div>


                            </div>

                            : null
                    }

                </div>

            </div>
        </div>
    );
}