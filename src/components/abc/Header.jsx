import monkeyGif from '../../assets/img/abc/monkey.gif';
import logo from '../../assets/img/abc/abcLogo.svg';
import appleİcon from '../../assets/img/abc/appleİcon.svg';


const Header = () => {
    return(
        <div className="abc-Header flex justify-center pt-[5.5rem] ">
            <div className="abc-Header-Container flex justify-between w-[1100px] h-[450px] overflow-hidden  px-[5rem]"> 

                <div className="monkey-gif deskMonkey ">
                    <img className="w-9/12 " src={monkeyGif} alt="" />
                </div>

                <div className="pt-[5rem]">
                    <div className="flex justify-center">
                        <img className="w-full max-w-sm" src={logo} alt="" />
                    </div>
                    
                    <p className="mobileText text-[1.625rem] text-center text-[#777777]">Designed by education experts to help your child learn to read - 100% free!</p>
                    <div className='pt-[3rem] flex justify-center '>
                        <a href="https://apps.apple.com/app/apple-store/id1440502568" className="headerAbcLink appleLink flex bg-[#1cb0f6] text-white w-[170px] rounded-2xl justify-between p-[15px] hover:bg-[#4dc3ff]">
                            <img className=" w-[2.5rem]" alt="" src={appleİcon} />
                            <div className="hideText">
                                <p className="text-[11.3px] font-bold leading-3">Download on the</p>
                                <p className="text-[15.7px] font-bold leading-4 pt-2">App Store</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="monkey-gif mobileMonkey">
                    <img className="w-[11rem]" src={monkeyGif} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Header;