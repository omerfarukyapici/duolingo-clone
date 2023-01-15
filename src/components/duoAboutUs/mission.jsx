import './DuoAboutUs.css';

import missionOne from './AboutUsİmg/missionOne.svg';
import missionTwo from './AboutUsİmg/missionTwo.svg';
import missionThree from './AboutUsİmg/missionThree.svg';
import missionFour from './AboutUsİmg/missionFour.svg'

const Mission = () => {
    return (
        <div className="DuoAboutUs-Mission py-10 px-3 w-auto lg:w-[900px] flex justify-center">
            <div>

                <div className="block lg:flex justify-between missionOne py-8">
                    <div className="flex justify-center pb-10">
                        <img src={missionOne} alt="" />
                    </div>
                    <div className="w-auto lg:w-[540px]">
                        <h2 className="test-[#3c3c3c] text-[24px] leading-7 font-bold mb-[24px]">Personalized education.</h2>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            Everyone learns in different ways. For the first time in history,
                            we can analyze how millions of people learn at once to create the
                            most effective educational system possible and tailor it to each student.
                        </p>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            Our ultimate goal is to give everyone access to a private tutor experience through technology.
                        </p>
                    </div>
                </div>


                <div className="block lg:flex justify-between missionTwo py-10">
                    <div className="flex justify-center lg:hidden">
                        <img src={missionTwo} alt="" />
                    </div>
                    <div className="w-auto lg:w-[540px] pt-10">
                        <h2 className="test-[#3c3c3c] text-[24px] leading-7 font-bold mb-[24px]">Making learning fun.</h2>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">It's hard to stay motivated when learning online,
                            so we made Duolingo so fun that people would prefer picking up new skills
                            over playing a game.
                        </p>
                    </div>
                    <div className="hidden lg:flex justify-center">
                        <img src={missionTwo} alt="" />
                    </div>
                </div>

                <div className="py-10">
                    <div className="flex justify-center lg:hidden pb-10">
                        <img src={missionFour} alt="" />
                    </div>

                    <div>
                        <h2 className="test-[#3c3c3c] text-[24px] leading-7 font-bold mb-[24px]">Universally accessible.</h2>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            There are over 1.2 billion people learning a language and the majority are doing so
                            to gain access to better opportunities. Unfortunately, learning a language is expensive
                            and inaccessible to most.
                        </p>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            We created Duolingo so that everyone could have a chance.
                            Free language education – no hidden fees, no premium content, just free.
                        </p>
                        <p className=" text-[#777] text-[17px] leading-6">
                            Duolingo is used by the richest man in the world and many Hollywood stars,
                            and at the same time by public schools students in developing countries.
                            We believe true equality is when spending more can't buy you a better education.
                        </p>
                    </div>
                    <div className="hidden lg:flex justify-between pt-10">
                        <div className="flex justify-center">
                            <img className="h-[227px]" src={missionThree} alt="" />
                        </div>
                        <div className="flex justify-center">
                            <img className="h-[227px]" src={missionFour} alt="" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Mission;