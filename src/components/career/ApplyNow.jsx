import { Button } from "./Button";
import OpeningImg from "../../assets/img/career/footerImg.svg";
/* import '../Career.css'; */
import "../../assets/styles/career.css"

const ApplyNow = () => {
    return (
        <div className=" flex justify-center">
            <div className="FooterCont w-full sm:w-[500px] lg:w-[1038px] flex justify-center lg:justify-between bg-[#58cc02] px-[1rem] p-[2rem] lg:p-[62px] lg:pt-[50px] rounded-[1rem]">
                <div className="w-[440px]">
                    <h1 className="text-center lg:text-left text-[50px] md:text-[64px] mb-[20px] text-white font-bold">apply now</h1>
                    <p className=" text-center lg:text-left text-[18px] leading-[24px] text-white">We're a multicultural, diverse group of people working to
                        develop the best education in the world and make it universally available.
                    </p>
                    <div className="pt-10 flex justify-center lg:justify-start">

                        {/* Useful button component */}
                        <Button
                            style={"CareerButton font-bold border-solid border-[#d6d8da] border-l-[1px] border-t-[1px] border-r-[1px] border-b-[4px] focus:border-[1px] focus:relative focus:top-1 py-3 px-7 rounded-xl bg-white text-[#58cc02]"}
                            content={"VIEW OPENINGS"}
                        />

                    </div>
                </div>
                <div className="hidden lg:block">
                    <img src={OpeningImg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default ApplyNow;
