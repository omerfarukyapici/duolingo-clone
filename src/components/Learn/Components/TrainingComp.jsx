import { useState } from 'react';

import crown from '../Learnİmg/navSix.svg';
import { LearnButtonComp } from './LearnButtonComp';

export const TrainingComp = ({
    /* Main Props */
    lessonİmg, lessonName,

    /* Features Props */

    /* Hover Props */

    /* Button Props */


}) => {

    const [showFeatures, setShowFeatures] = useState(false);

    return (
        <div className="p-4 ">

            <button className='lessonShowBtn' onClick={() => {
                
                setShowFeatures(!showFeatures);

            }} >
                
                {/* Rotate img with hover */}
                <div className='lessonİmgDivParent'>
                    <div className='lessonİmgDiv'>
                        <img className='lessonİmg w-[5rem]' src={lessonİmg} alt="" />
                    </div>
                    <img className='absolute ml-16 -mt-5' src={crown} alt="" />
                    <span className='absolute ml-[1.8754rem] -mt-[1.1rem] font-bold text-[#cd7900]'>1</span>
                </div>

                <div>
                    <p className='text-[#3c3c3c] font-bold text-[17px]'> {lessonName} </p>
                </div>
            </button>


            {/* Show Features Part with Click Event */}
            {
                

                showFeatures ?

                    <div className='scaleFeature z-[40] showFeatures  rounded-[15px] absolute p-[16px] bg-[#1cb0f6] mt-[1rem] -ml-[6.09999rem] lg:-ml-[5.9rem] w-[300px]' >
                        <span className='showFeaturesArrow'></span>
                        <div className='w-auto h-auto'>
                            <div className='stars flex justify-between pb-[12px]'>
                                <img src={crown} alt="" />
                                <img src={crown} alt="" />
                                <img src={crown} alt="" />
                                <img src={crown} alt="" />
                                <img src={crown} alt="" />
                                <img src={crown} alt="" />
                            </div>
                            <div className='flex justify-between  '>
                                <div className='text-white '>
                                    <p className='font-bold'>Level 1/6</p>
                                    <p>Lesson 0/4</p>
                                </div>
                                <div className='pt-3'>
                                    <LearnButtonComp
                                        btnDivClass={"w-full text-center font-bold"}
                                        btnClass={"learnBtnStyleOne learnBtnStyleThree bg-[#1cb0f6] px-[1.5rem] py-2.5 rounded-xl"}
                                        btnTitle={""}
                                        btnAddress={"#/learn"}
                                    />
                                </div>
                            </div>
                            <div className='pt-7'>
                                <LearnButtonComp
                                    btnDivClass={"w-full text-center font-bold"}
                                    btnClass={"learnBtnStyleOne text-white bg-[#1cb0f6] px-[5rem] sm:px-[7.2rem] py-2.5 rounded-xl "}
                                    btnTitle={"TIPS"}
                                    btnAddress={"#/action"}
                                />
                            </div>
                            <div className='pt-7 pb-2'>
                                <LearnButtonComp
                                    btnDivClass={"w-full text-center font-bold"}
                                    btnClass={"learnBtnStyleTwo text-[#1cb0f6] bg-white px-[2.6rem] sm:px-[4.9rem] py-2.5 rounded-xl"}
                                    btnTitle={"START +10 XP"}
                                    btnAddress={"#/action"}
                                />
                            </div>
                        </div>
                    </div>

                    : null

            }


        </div>
    );
}


