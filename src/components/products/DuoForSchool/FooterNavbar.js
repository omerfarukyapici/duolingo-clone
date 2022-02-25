import './DuoForSchool.css';

const FooterNavbar = () => {
    return (
        <div className="FooterLine flex justify-center bg-[#1cb0f6]">
            <div className=" footer-Nav flex justify-center py-[2.5rem] px-[1rem] ">
                <ul className="flex flex-wrap md:text-center text-[15px] font-bold">
                    <li className="m-[6px]" ><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/">DUOLINGO</a></li>
                    <li className="m-[6px]"><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/duoaboutus">ABOUT</a></li>
                    <li className="m-[6px]"><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/career">CAREERS</a></li>
                    <li className="m-[6px]"><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/">APPS</a></li>
                    <li className="m-[6px]"><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/">HELP</a></li>
                    <li className="m-[6px]"><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/terms">TERMS</a></li>
                    <li className="m-[6px]"><a className="m-[12px] text-white opacity-80  hover:opacity-100" href="#/privacy">PRIVACY</a></li>
                </ul>
            </div>
        </div>
    );
}

export default FooterNavbar;