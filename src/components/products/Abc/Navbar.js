import abcimg from '../Productsİmg/abcLogo.svg';
import appleİcon from '../Productsİmg/appleİcon.svg';

import './Abc.css';

const Navbar = () => {
    return (
        <div className="abcNav relative " >
            <nav className="header navbar flex justify-center fixed w-full bg-white">
                <div className="container mx-auto flex justify-between p-1.5 w-[1150px]">
                    <div className='p-2.5 pl-6 pt-4'>
                        <a href="#/abc" >
                            <img className="h-8 f-down-logo w-full" alt="" src={abcimg} />
                        </a>
                    </div>
                    <div className=' pt-2 mobileApple'>
                        <a href="https://apps.apple.com/app/apple-store/id1440502568" className=" appleLink flex bg-[#1cb0f6] text-white w-full rounded-2xl justify-between p-[10px] hover:bg-[#4dc3ff]">
                            <img className=" w-[1.6rem]" alt="" src={appleİcon} />
                        </a>
                    </div>
                    <div className=' pt-2 deskApple'>
                        <a href="https://apps.apple.com/app/apple-store/id1440502568" className=" appleLink flex bg-[#1cb0f6] text-white w-[140px] rounded-2xl justify-between p-[10px] hover:bg-[#4dc3ff]">
                            <img className=" w-[1.6rem]" alt="" src={appleİcon} />
                            <div className="hideText">
                                <p className="text-[10.3px] font-bold leading-3">Download on the</p>
                                <p className="text-[12.7px] font-bold leading-4">App Store</p>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;