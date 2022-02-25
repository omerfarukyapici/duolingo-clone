import '../Abc/Abc.css';
import interactiveGif from '../ProductsGifs/interactive.gif';
import lessonsGif from '../ProductsGifs/lessons.gif';
import gamesGif from '../ProductsGifs/games.gif';

import React from "react";
import Slider from "react-slick";

const WayToLearn = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        width: 100
    };


    return (
        <div className="abc-wayToLearn flex justify-center pt-[5rem] px-8">

            <div className="abc-Container w-[1040px] text-white">

                <div className='desk-Gifs'>

                    <div className="flex justify-center ">
                        <p className=" text-[32px] text-[#4b4b4b] font-bold w-full max-w-2xl leading-9">
                            Over 300 fun, bite-sized lessons teaching the alphabet, phonics, and sight words.
                        </p>
                    </div>


                    <div className="flex justify-center pt-[6rem] ">
                        <div className="interactive-gif w-full max-w-4xl flex justify-around">
                            <div className='px-10 pl-16'>
                                <img className="w-[19rem] relative -top-10 " src={interactiveGif} alt='' />
                            </div>
                            <div className='px-10 pl-16 pt-[7rem] '>
                                <p className='text-[24px] font-bold ' >Interactive learning</p>
                                <p className='text-[19px] '>Delightful stories that build fluency and help your child learn to read independently.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center pt-[6rem] ">
                        <div className="lessons-gif w-full max-w-4xl flex justify-around">
                            <div className='px-10 pl-16 pt-[7rem] '>
                                <p className='text-[24px] font-bold ' >Interactive learning</p>
                                <p className='text-[19px] '>Delightful stories that build fluency and help your child learn to read independently.</p>
                            </div>
                            <div className='px-10 pl-16 '>
                                <img className="w-[19rem] relative -top-10 " src={lessonsGif} alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-center pt-[6rem] ">
                        <div className="games-gif w-full max-w-4xl flex justify-around">
                            <div className='px-10 pl-16'>
                                <img className="w-[19rem] relative -top-10 " src={gamesGif} alt='' />
                            </div>
                            <div className='px-10 pl-16 pt-[7rem] '>
                                <p className='text-[24px] font-bold ' >Interactive learning</p>
                                <p className='text-[19px] '>Delightful stories that build fluency and help your child learn to read independently.</p>
                            </div>
                        </div>
                    </div>
                </div>




                {/* Mobile gifs */}
                <div className="flex justify-center gifsSlider">
                    <p className=" mobileText text-[32px] text-[#4b4b4b] font-bold w-full max-w-2xl leading-9 text-center">
                        Over 300 fun, bite-sized lessons teaching the alphabet, phonics, and sight words.
                    </p>
                </div>



                <div className='flex justify-center gifsSlider'>
                    
                    <div className='w-[300px] sliderWidth'>
                        <Slider {...settings}>
                            <div className='px-4 py-2'>
                                <div className='flex justify-center py-4'>
                                    <img className='w-[7rem]' src={interactiveGif} alt='' />
                                </div>
                                <div className='mobile-blue rounded-2xl p-8 '>
                                    <p className='text-[24px] font-bold ' >Interactive learning</p>
                                    <p className='text-[19px] '>Delightful stories that build fluency and help your child learn to read independently.</p>
                                </div>
                            </div>

                            <div className='px-4 py-2'>
                                <div className='flex justify-center py-4'>
                                    <img className='w-[7rem]' src={lessonsGif} alt='' />
                                </div>
                                <div className='mobile-orange rounded-2xl p-8'>
                                    <p className='text-[24px] font-bold ' >Interactive learning</p>
                                    <p className='text-[19px] '>Delightful stories that build fluency and help your child learn to read independently.</p>
                                </div>
                            </div>

                            <div className='px-4 py-2'>
                                <div className='flex justify-center py-4'>
                                    <img className='w-[7rem]' src={gamesGif} alt='' />
                                </div>
                                <div className='mobile-red rounded-2xl p-8'>
                                    <p className='text-[24px] font-bold ' >Interactive learning</p>
                                    <p className='text-[19px] '>Delightful stories that build fluency and help your child learn to read independently.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default WayToLearn;