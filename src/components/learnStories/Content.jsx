import { TrainingStoriesComp } from "../../components/global/learn/TrainingStoriesComp";

import One from "../../assets/img/learnStories/1.svg";
import Two from '../../assets/img/learnStories/2.svg';
import Three from '../../assets/img/learnStories/3.svg';
import Four from '../../assets/img/learnStories/4.svg';
import Five from '../../assets/img/learnStories/5.svg';
import Six from '../../assets/img/learnStories/6.svg';
import Seven from '../../assets/img/learnStories/7.svg';
import Eight from '../../assets/img/learnStories/8.svg';
import Nine from '../../assets/img/learnStories/9.svg';
import Ten from '../../assets/img/learnStories/10.svg';

import Eleven from '../../assets/img/learnStories/11.svg';
import Twelve from '../../assets/img/learnStories/12.svg';
import ThirTeen from '../../assets/img/learnStories/13.svg';
import FourTeen from '../../assets/img/learnStories/14.svg';
import FifTeen from '../../assets/img/learnStories/15.svg';
import SixTeen from '../../assets/img/learnStories/16.svg';
import SevenTeen from '../../assets/img/learnStories/17.svg';
import EighTeen from '../../assets/img/learnStories/18.svg';
import NineTeen from '../../assets/img/learnStories/19.svg';
import Twenty from '../../assets/img/learnStories/20.svg';

import TwentyOne from '../../assets/img/learnStories/21.svg';
import TwentyTwo from '../../assets/img/learnStories/22.svg';
import TwentyThree from '../../assets/img/learnStories/23.svg';
import TwentyFour from '../../assets/img/learnStories/24.svg';
import TwentyFive from '../../assets/img/learnStories/25.svg';
import TwentySix from '../../assets/img/learnStories/26.svg';
import TwentySeven from '../../assets/img/learnStories/27.svg';
import TwentyEight from '../../assets/img/learnStories/28.svg';
import TwentyNine from '../../assets/img/learnStories/29.svg';
import Thirty from '../../assets/img/learnStories/30.svg';

import ThirtyOne from '../../assets/img/learnStories/31.svg';
import ThirtyTwo from '../../assets/img/learnStories/32.svg';
import ThirtyThree from '../../assets/img/learnStories/33.svg';
import ThirtyFour from '../../assets/img/learnStories/34.svg';
import ThirtyFive from '../../assets/img/learnStories/35.svg';
import ThirtySix from '../../assets/img/learnStories/36.svg';
import ThirtySeven from '../../assets/img/learnStories/37.svg';
import ThirtyEight from '../../assets/img/learnStories/38.svg';
import ThirtyNine from '../../assets/img/learnStories/39.svg';
import Forty from '../../assets/img/learnStories/40.svg';
import { GroupLineComp } from "./GroupLineComp";

export const Content = () => {
    return (
        <div className="flex justify-center pt-20">
            <div>

                <div className="text-center pt-[2rem]  ">
                    <h1 className="text-[#4b4b4b] text-[34px] font-bold leading-1.6">Duolingo Stories</h1>
                    <p className="text-[#4b4b4b] text-[19px] leading-1.4 pt-5 px-3">Improve your reading and listening with short stories!</p>
                </div>



                <div className="flex justify-center flex-wrap ">
                    <div>
                        <div>
                            <GroupLineComp
                                group={"Group 1"}
                            />
                        </div>
                        <div className="flex justify-center flex-wrap">
                            <TrainingStoriesComp
                                img={One}
                                imgClass={"w-[8.7rem] mx-[1rem]"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#ffb100] w-[200px] lg:w-[337px] "}
                                level={"Level 2/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#ffb100]"}
                            />
                            <TrainingStoriesComp
                                img={Two}
                                imgClass={"w-[8.7rem] mx-[1rem]"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[1rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#ffb100] w-[200px] lg:w-[337px]"}
                                level={"Level 2/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#ffb100]"}
                            />
                            <TrainingStoriesComp
                                img={Three}
                                imgClass={"w-[8.7rem] mx-[1rem]"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[1rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#ffb100] w-[200px] lg:w-[337px]"}
                                level={"Level 2/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#ffb100]"}
                            />
                            <TrainingStoriesComp
                                img={Four}
                                imgClass={"w-[8.7rem] mx-[1rem]"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[1rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#ffb100] w-[200px] lg:w-[337px]"}
                                level={"Level 2/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#ffb100]"}
                            />
                        </div>

                    </div>

                </div>



                <div className="flex justify-center flex-wrap">
                    <div>
                        <div>
                            <GroupLineComp
                                group={"Group 2"}
                            />
                        </div>
                        <div className="flex justify-center flex-wrap">
                            <TrainingStoriesComp
                                img={Five}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#ffb100] w-[200px] lg:w-[337px]"}
                                level={"Level 2/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#ffb100]"}
                            />
                            <TrainingStoriesComp
                                img={Six}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#ffb100] w-[200px] lg:w-[337px]"}
                                level={"Level 2/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#ffb100]"}
                            />
                            <TrainingStoriesComp
                                img={Seven}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#ffb100] w-[200px] lg:w-[337px]"}
                                level={"Level 2/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#ffb100]"}
                            />
                            <TrainingStoriesComp
                                img={Eight}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#ffb100] w-[200px] lg:w-[337px]"}
                                level={"Level 2/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#ffb100]"}
                            />
                        </div>

                    </div>


                </div>


                <div className="flex justify-center flex-wrap ">
                    <div>
                        <div>
                            <GroupLineComp
                                group={"Group 3"}
                            />
                        </div>
                        <div className="flex justify-center flex-wrap">
                            <TrainingStoriesComp
                                img={Nine}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#69d6d9] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#69d6d9]"}
                            />
                            <TrainingStoriesComp
                                img={Ten}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#7f59b8] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#7f59b8]"}
                            />
                            <TrainingStoriesComp
                                img={Eleven}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#78c800] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#78c800]"}
                            />
                            <TrainingStoriesComp
                                img={Twelve}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#2bb3ee] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#2bb3ee]"}
                            />
                        </div>
                    </div>


                </div>

                <div className="flex justify-center flex-wrap ">

                    <div>
                        <div>
                            <GroupLineComp
                                group={"Group 4"}
                            />
                        </div>
                        <div className="flex justify-center flex-wrap">
                            <TrainingStoriesComp
                                img={ThirTeen}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#d94545] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#d94545]"}
                            />
                            <TrainingStoriesComp
                                img={FourTeen}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#874522] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#874522]"}
                            />
                            <TrainingStoriesComp
                                img={FifTeen}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#3a8500] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#3a8500]"}
                            />
                            <TrainingStoriesComp
                                img={SixTeen}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#58311d] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#58311d]"}
                            />
                        </div>
                    </div>


                </div>

                <div className="flex justify-center flex-wrap ">

                    <div>
                        <div>
                            <GroupLineComp
                                group={"Group 5"}
                            />
                        </div>
                        <div className="flex justify-center flex-wrap">
                            <TrainingStoriesComp
                                img={SevenTeen}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#333333] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#333333]"}
                            />
                            <TrainingStoriesComp
                                img={EighTeen}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#1cb0f6] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#1cb0f6]"}
                            />
                            <TrainingStoriesComp
                                img={NineTeen}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#5d9a00] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#5d9a00]"}
                            />
                            <TrainingStoriesComp
                                img={Twenty}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#58a700] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#58a700]"}
                            />
                        </div>
                    </div>


                </div>

                <div className="flex justify-center flex-wrap">

                    <div>
                        <div>
                            <GroupLineComp
                                group={"Group 6"}
                            />
                        </div>
                        <div className="flex justify-center flex-wrap">
                            <TrainingStoriesComp
                                img={TwentyOne}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#0078ce] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#0078ce]"}
                            />
                            <TrainingStoriesComp
                                img={TwentyTwo}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#814624] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#814624]"}
                            />
                            <TrainingStoriesComp
                                img={TwentyThree}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#1cb0f6] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#1cb0f6]"}
                            />
                            <TrainingStoriesComp
                                img={TwentyFour}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#6f4ba2] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#6f4ba2]"}
                            />
                        </div>
                    </div>


                </div>

                <div className="flex justify-center flex-wrap ">

                    <div>
                        <div>
                            <GroupLineComp
                                group={"Group 7"}
                            />
                        </div>
                        <div className="flex justify-center flex-wrap">
                            <TrainingStoriesComp
                                img={TwentyFive}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#1576ac] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#1576ac]"}
                            />
                            <TrainingStoriesComp
                                img={TwentySix}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#6f4ea1] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#6f4ea1]"}
                            />
                            <TrainingStoriesComp
                                img={TwentySeven}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#4db000] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#4db000]"}
                            />
                            <TrainingStoriesComp
                                img={TwentyEight}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#fe94d5] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#fe94d5]"}
                            />
                        </div>
                    </div>


                </div>

                <div className="flex justify-center flex-wrap ">

                    <div>
                        <div>
                            <GroupLineComp
                                group={"Group 8"}
                            />
                        </div>
                        <div className="flex justify-center flex-wrap">
                            <TrainingStoriesComp
                                img={TwentyNine}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#52ae32] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#52ae32]"}
                            />
                            <TrainingStoriesComp
                                img={Thirty}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#d78a20] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#d78a20]"}
                            />
                            <TrainingStoriesComp
                                img={ThirtyOne}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#066dcc] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#066dcc]"}
                            />
                            <TrainingStoriesComp
                                img={ThirtyTwo}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#945837] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#945837]"}
                            />
                        </div>
                    </div>


                </div>

                <div className="flex justify-center flex-wrap">

                    <div>
                        <div>
                            <GroupLineComp
                                group={"Group 9"}
                            />
                        </div>
                        <div className="flex justify-center flex-wrap">
                            <TrainingStoriesComp
                                img={ThirtyThree}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#60dbf8] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#60dbf8]"}
                            />
                            <TrainingStoriesComp
                                img={ThirtyFour}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#f43b3b] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#f43b3b]"}
                            />
                            <TrainingStoriesComp
                                img={ThirtyFive}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#2f2f2f] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#2f2f2f]"}
                            />
                            <TrainingStoriesComp
                                img={ThirtySix}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#bebebe] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#bebebe]"}
                            />
                        </div>
                    </div>


                </div>


                <div className="flex justify-center flex-wrap ">

                    <div className="bottomPadding">
                        <div>
                            <GroupLineComp
                                group={"Group 10"}
                            />
                        </div>
                        <div className="flex justify-center flex-wrap">
                            <TrainingStoriesComp
                                img={ThirtySeven}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#4b4b4b] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#4b4b4b]"}
                            />
                            <TrainingStoriesComp
                                img={ThirtyEight}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#10a3e9] w-[200px] lg:w-[337px] "}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#10a3e9]"}
                            />
                            <TrainingStoriesComp
                                img={ThirtyNine}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#6f4ea1] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#6f4ea1]"}
                            />
                            <TrainingStoriesComp
                                img={Forty}
                                imgClass={"w-[8.7rem] mx-4"}
                                textOne={"TextOne"}
                                textTwo={"TextTwo"}
                                /* Features Props */
                                featuresClass={"trainingStoriesFeatures -mt-4 -ml-[.8rem] lg:-ml-[5.3rem] p-[1rem] rounded-[.8rem] absolute bg-[#573688] w-[200px] lg:w-[337px]"}
                                level={"Level 1/2"}
                                linkClass={"w-full text-center rounded-[.5rem] py-2 text-[#573688]"}
                            />
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}