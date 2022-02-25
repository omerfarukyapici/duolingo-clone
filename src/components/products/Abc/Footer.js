import footerApple from '../Productsİmg/footerAppleİcon.svg';
import abcDuo from '../Productsİmg/f-abc.svg';
import './Abc.css';

const Footer = () => {
    return (
        <div className='abc-footer bg-[#1cb0f6] flex justify-center'>

            <div className="">
                <div className="abc-footer-Container pt-[4rem] pb-[2rem] md:pt-[8rem] md:pb-[4rem] xl:w-[1080px] md:flex justify-around">
                    <div className="flex justify-center" >
                        <img className="w-auto md:w-[12rem]" src={abcDuo} alt="" />
                    </div>
                    <div className="flex justify-around">
                        <div className=''>

                            <p className=" text-[19px] md:text-[24px] font-bold text-white font-bold py-[1.4rem] text-center ">Learn to read with Duolingo ABC</p>

                            <div className="flex justify-center">
                                <a href="https://apps.apple.com/app/apple-store/id1440502568" className="abc-footer-link appleLink flex bg-white text-[#4b4b4b] w-[170px] rounded-2xl justify-between p-[15px] ">
                                    <img className=" w-[2.5rem] opacity-70" alt="" src={footerApple} />
                                    <div className="hideText">
                                        <p className="text-[11.3px] font-bold leading-3">Download on the</p>
                                        <p className="text-[15.7px] font-bold leading-4 pt-2">App Store</p>
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>



                <div className="footer-Nav flex justify-center py-[3rem] px-[1rem]">
                    <ul className="flex flex-wrap md:text-center text-[15px] font-bold">
                        <li className="m-[6px]" ><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/">DUOLINGO</a></li>
                        <li className="m-[6px]"><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/duoaboutus">ABOUT</a></li>
                        <li className="m-[6px]"><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/career">CAREERS</a></li>
                        <li className="m-[6px]"><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/">APPS</a></li>
                        <li className="m-[6px]"><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/">INVESTORS</a></li>
                        <li className="m-[6px]"><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/">HELP</a></li>
                        <li className="m-[6px]"><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/terms">TERMS</a></li>
                        <li className="m-[6px]"><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/privacy">PRIVACY</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Footer;