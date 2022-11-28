import navOne from "../../../assets/img/learn/navOne.svg"
import navTwo from '../../../assets/img/learn/navTwo.svg';
import navFour from '../../../assets/img/learn/navFour.svg';
import userİmg from '../../../assets/img/learn/userAvatar.svg';

export const MobileNavbar = () => {
    return (
        <div className='relative'>
            <div className="z-[1000] fixed lg:hidden w-full bottom-0 bg-white border-t-[2px] border-solid border-[#d6d8da]"  >
                <div className=" flex justify-between ">

                    <div className="pt-1">
                        <a href="#/learn" className="flex m-2.5 text-[#afafaf] hover:text-[#878585] font-bold">
                            <img className="w-[3rem] pt-1" alt='' src={navOne} />
                        </a>
                    </div>

                    <div className="pt-1">
                        <a href="#/learn" className="flex m-2.5 text-[#afafaf] hover:text-[#878585] font-bold">
                            <img className="w-[3rem] pt-1" alt='' src={navTwo} />
                        </a>
                    </div>

                    <div className="pt-1">
                        <a href="#/learn" className="flex m-2.5 text-[#afafaf] hover:text-[#878585] font-bold">
                            <img className="w-[3rem] pt-1" alt='' src={navFour} />
                        </a>
                    </div>

                    <div className="pt-1">
                        <a href="#/learn" className="flex m-2.5 text-[#afafaf] hover:text-[#878585] font-bold">
                            <img className="w-[3rem] pt-1" alt='' src={userİmg} />
                        </a>
                    </div>

                </div>

            </div>
        </div>

    );
} 