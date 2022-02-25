import './DuoForSchool.css';
import FooterOne from './duoForSchoolİmg/footerBg.svg';
import FooterTwo from './duoForSchoolİmg/footerBgTwo.svg'

const Footer = () => {
    return (
        <div className="flex justify-center bg-[#1cb0f6]">
            <div>
                <div className=" flex justify-between">
                    <div className="pt-20 hidden lg:block ">
                        <img className="opacity-20" src={FooterOne} alt='' />
                    </div>
                    <div className="py-10 md:py-[7rem]">
                        <h1 className="text-center text-white text-[32px] font-bold leading-10">Bring Duolingo to your classroom</h1>
                        <div className="text-center flex justify-center pt-6">
                            <a href="#/learn" className="dfs-footer-Link flex justify-center  bg-white text-[#1cb0f6] w-[180px] rounded-xl ">
                                <p className="text-[15px] font-bold leading-3 py-5">GET STARTED</p>
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <img className="opacity-20" src={FooterTwo} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;