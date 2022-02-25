import NavComponent from "./NavComponent";
import HeaderLogo from './ReSearchİmg/researchLogo.svg';
import './ReSearch.css';

const Header = () => {
    return (
        <section className=" ReSearch-Header flex justify-center pb-[1rem] md:pb-[6rem]">
            <div className="w-[1100px] px-6 lg:px-[5rem] pt-[22rem] md:pt-[30rem]">
                <div >
                    <img className="w-full sm:w-[550px]" src={HeaderLogo} alt="" />
                </div>
                <p className="w-auto py-[2rem]  md:w-[520px] leading-10 text-[#4c4c4c] text-[24px] font-medium">Science powers our mission to make language education free and accessible to everyone.</p>
                <div className="hidden md:block pt-[2rem]">
                    <ul className="flex">
                        <NavComponent
                            ncCn="m-4 ml-0"
                            linkAdress="#/duoaboutus"
                            linkName="About Us"
                        />
                        <NavComponent
                            ncCn="m-4"
                            linkAdress="#/research"
                            linkName="Publications"
                        />
                        <NavComponent
                            ncCn="m-4"
                            linkAdress="#/research"
                            linkName="Data & Tools"
                        />
                        <NavComponent
                            ncCn="m-4"
                            linkAdress="#/research"
                            linkName="Our Team"
                        />
                        <NavComponent
                            ncCn="m-4"
                            linkAdress="#/career"
                            linkName="Careers"
                        />
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Header;