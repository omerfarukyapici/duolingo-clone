import teamOne from "../../assets/img/duoAboutUs/teamOne.svg";
import teamTwo from "../../assets/img/duoAboutUs/teamTwo.svg";
import teamThree from "../../assets/img/duoAboutUs/teamThree.svg";
import teamFour from "../../assets/img/duoAboutUs/teamFour.svg";
import teamFive from "../../assets/img/duoAboutUs/teamFive.svg";
import "../../assets/styles/duoAboutUs.css";

const Team = () => {
    return (
        <div className="DuoAboutUs-Team py-10 px-3 w-auto lg:w-[900px] flex justify-center">
            <div>
                <div className="text-center px-3 lg:px-40 py-8">
                    <h2 className="test-[#3c3c3c] text-[24px] leading-7 font-bold mb-[24px]">We have 4 offices. We come from more than 30 countries and speak more than 30 languages.</h2>
                </div>

                <div className="flex jusitfy-center">
                    <img src={teamOne} alt="" />
                </div>

                <h2 className="test-[#3c3c3c] py-10 text-center text-[24px] leading-7 font-bold mb-[24px]">Diversity matters here.</h2>

                <div className="flex justify-center">
                    <img src={teamTwo} alt="" />
                </div>

                <h2 className="test-[#3c3c3c] pt-12 text-center text-[24px] leading-7 font-bold mb-[18px]">One for all.</h2>

                <div className="flex justify-center">
                    <div className="block lg:flex justify-between">
                        <div className="flex jusitfy-center p-10">
                            <img className="w-[320px]" src={teamThree} alt="" />
                        </div>
                        <div className="block lg:flex justify-center  p-2 lg:p-10 pb-[4rem] pt-[1.5rem] lg:pt-[5.5rem]">
                            <ul className="font-bold list-disc text-[17px]">
                                <li className="text-[#58CC02] " >Business Development</li>
                                <li className="text-[#84D8FF]">Marketing</li>
                                <li className="text-[#E5A259]">Learning</li>
                                <li className="text-[#FFAADE]">Design</li>
                                <li className="text-[#CE82FF]">Product Management</li>
                                <li className="text-[#FF5151]">People & Finance</li>
                                <li className="text-[#FFC801]">Engineering</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center px-2 lg:px-20">
                    <h2 className=" test-[#3c3c3c] text-[24px] leading-7 font-bold mb-[24px]">
                        We empathize with all our learners no matter how they are learning.
                    </h2>
                    <p className=" text-[#777] text-[17px] leading-6">We offer podcasts, stories, and live events around the world across devices old and new.</p>
                </div>
                <div className="flex justify-center py-[2rem]">
                    <img src={teamFour} alt="" />
                </div>
                <div className="text-center py-10">
                    <h2 className=" test-[#3c3c3c] text-[24px] leading-7 font-bold mb-[24px]">We take playtime seriously.</h2>
                    <p className=" text-[#777] text-[17px] leading-6">31 social clubs, 40 board games, and dogs are always welcome!</p>
                </div>
                <div className="flex justify-center py-[2rem]">
                    <img src={teamFive} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Team;