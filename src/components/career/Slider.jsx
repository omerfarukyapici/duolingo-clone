import React from "react";
import Slider from "react-slick";
import { Button } from "./Button";

/* Slider img */
import sliderOne from '../../assets/img/career/sliderOne.png';
import sliderTwo from '../../assets/img/career/sliderTwo.png';
import sliderThree from '../../assets/img/career/sliderThree.png';
import sliderFour from '../../assets/img/career/sliderFour.png';
import sliderFive from '../../assets/img/career/sliderFive.png';

import "../../assets/styles/career.css";

const JobSlider = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="flex justify-center">

            <div className="w-full lg:w-[1080px] border-b-[2px] border-solid border-[#d6d8da] ">
                <div className="flex justify-center">
                    <div>
                        <h1 className="text-[44px] md:text-[72px] pt-[45px] leading-1 text-[#58cc02] text-center font-bold">work at duolingo</h1>
                        <div className="flex justify-center">
                            <p className="px-2 py-[1.6rem] text-[#777] text-[19px] leading-1.3 w-auto md:w-[570px]">We're a multicultural, diverse group of people working to develop the
                                best education in the world and make it universally available.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="Career-slider-part flex justify-center">
                    <div className="w-full lg:w-[700px] px-2">
                        <Slider {...settings}>
                            <div className="">
                                <img className="w-full" alt="" src={sliderTwo} />
                            </div>
                            <div>
                                <img className="w-full" alt="" src={sliderOne} />
                            </div>
                            <div>
                                <img className="w-full" alt="" src={sliderThree} />
                            </div>
                            <div>
                                <img className="w-full" alt="" src={sliderFour} />
                            </div>
                            <div>
                                <img className="w-full" alt="" src={sliderFive} />
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="flex justify-center mt-12 md:mt-20">
                    <div className="block md:flex pb-[4rem] md:pb-[6rem]">
                        <div className=" p-[2rem] md:p-[.5rem] ">
                            <Button
                                style="CareerButton font-bold border-solid border-[#368eb7] border-l-[1px] border-t-[1px] border-r-[1px] border-b-[4px] focus:border-[1px] focus:relative focus:top-1 py-3 px-14 md:px-7 rounded-xl bg-[#1cb0f6] text-white"
                                content={"VIEW OPENING"}
                            />
                        </div>

                        <div className="p-[.5rem]">
                            <Button
                                style={"CareerButton font-bold border-solid border-[#d6d8da] border-l-[1px] border-t-[1px] border-r-[1px] border-b-[4px] focus:border-[1px] focus:relative focus:top-1 py-3 px-14 md:px-7 rounded-xl bg-white text-[#1cb0f6]"}
                                content={"VİEW BENEFİTS"}
                            />
                        </div>

                    </div>
                </div>

            </div>


        </div>
    );
}

export default JobSlider;