import { Footer } from "../Learn/Components/Footer";
import { LeagueCompOne } from "../Learn/Components/LeagueCompOne";
import { LeagueCompTwo } from "../Learn/Components/LeagueCompTwo";
import { ShopPowerUp } from "../Learn/Components/ShopPowerUp";

import PowerOne from "../../assets/img/shop/freeze.svg"
import PowerTwo from '../../assets/img/shop/calendar.svg';
import lingot from '../../assets/img/shop/lingot.svg';

import "../../assets/styles/shop.css";

export const Content = () => {
    return (
        <div className="learnPage-Content flex justify-center pt-[5rem] ">
            <div className="flex ">

                <div className="p-2 flex justify-center w-full md:w-[740px] lg:w-[736px] ">
                    <div>
                        <div className=" pb-20 lg:pb-10">
                            <div>
                                <p className="text-[#3c3c3c] text-center sm:text-left text-[24px] leading-[26px] font-bold py-6">Power-Ups</p>
                                <ShopPowerUp
                                    img={PowerOne}
                                    powerTitle={"Serial freezing"}
                                    powerContent={"Serial freezing ensures that the leather does not deteriorate on a day of laziness."}
                                    lingotNumber={10}
                                />
                                <ShopPowerUp
                                    img={PowerTwo}
                                    powerTitle={"Double it"}
                                    powerContent={"Grab a seven-day series to double the five-lingot bet."}
                                    lingotNumber={5}
                                />
                                <div className="flex pt-6">
                                    <p className="text-[#3c3c3c] text-[18px] font-bold">What is Lingot ?</p>
                                    <img className="w-6 ml-2" src={lingot} alt="" />
                                </div>
                                <p className="text-[#999999] text-[16px] py-2">
                                    <span className="font-bold">Lingot</span> is the virtual currency of Duolingo. As you learn on Duolingo, you earn
                                    Lingots and you can spend them in the shop whenever you want! Ways to win:
                                </p>
                                <div className="flex text-[13px] py-4">
                                    <ul className="font-medium">
                                        <li>Level up</li>
                                        <li>Finishing the skill</li>
                                        <li>10 day series</li>
                                    </ul>
                                    <ul className="text-[#3c3c3c] ml-4">
                                        <li>Win <span className="font-medium">1 lingot</span></li>
                                        <li>Get <span className="font-medium">2 lingots</span> when you finish a skill</li>
                                        <li>Earn <span className="font-medium">1 lingot</span> for every 10 days in the series (1 for 10 days, 2 for 20 days, etc.)</li>
                                        <li className="py-4">Note: You cannot earn lingots when using a shortcut to level up and finish the skill.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=" hideShopFooter flex justify-center border-t-[3px] border-solid border-[#e5e5e5]">
                            <Footer />
                        </div>
                    </div>

                </div>

                <div className="hidden lg:block w-2/4  xl:w-[380px] pt-5 ">
                    <div>
                        <div>
                            <LeagueCompOne />
                        </div>
                        <div className="pt-3">
                            <LeagueCompTwo />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}