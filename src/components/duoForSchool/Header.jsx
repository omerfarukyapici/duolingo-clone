import logo from '../../assets/img/duoForSchool/logo.svg';
import headerİmg from '../../assets/img/duoForSchool/headerİmg.svg';

const Header = () => {
    return (
        <div className="dfs-Header flex justify-center bg-[#ddf4ff]">
            <div className="w-[1056px] px-4 xl:px-0">
                <div className="pt-[34px]">
                    <img src={logo} alt='' />
                </div>


                <div className="block md:flex justify-between pt-[3rem] md:pt-[8.5rem] pb-[3rem] md:pb-[6rem]">
                    <div className="dfs-hideİmg flex justify-center pb-10">
                        <img src={headerİmg} alt='' />
                    </div>

                    <div className="text-[#3c3c3c] w-auto md:w-[480px] ">
                        <p className="text-[32px] font-bold leading-10 pb-[24px]">
                            The best way to help you teach a language, completely free!
                        </p>
                        <p className="text-[17px] leading-6 pb-[24px]">
                            <b>Duolingo for Schools</b> is your free partner in helping every student learn a new language.
                            We use fun, bite-sized lessons, in a rich, gamified environment to help you meet each student at their own level.
                        </p>
                        <div className="pt-[44px]">
                            <a href="#/learn" className="dfs-Link flex justify-center  bg-[#1cb0f6] text-white w-[180px] rounded-xl hover:bg-[#4dc3ff]">
                                <p className="text-[15px] font-bold leading-3 py-5">GET STARTED</p>
                            </a>
                        </div>
                    </div>

                    <div className="dfs-showİmg flex justify-center">
                        <img className="" src={headerİmg} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;