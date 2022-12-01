import "../../assets/styles/efficacy.css";

import mobileİmg from '../../assets/img/efficacy/listenReadMobile.svg';
import normalİmg from '../../assets/img/efficacy/listenRead.svg';

export const ListenRead = () => {
    return (
        <div className="e-ListenRead flex justify-center ">
            <div className="e-ListenRead-Container pt-20 pb-20 px-4">
                <p>listening & reading</p>

                <div className="flex justify-center hidden sm:flex md:flex lg:flex">
                    <img className="" src={normalİmg} alt="" />

                </div>

                <div className="flex justify-center flex sm:hidden md:hidden lg:hidden ">
                    <img className="" src={mobileİmg} alt="" />
                </div>
                <div className="flex justify-center pt-10">
                    <div className=" md:w-[600px]  ">

                        <div className="px-4  ">
                            In two studies focused on listening and reading skills,
                            Duolingo learners taking the French or Spanish course demonstrated substantial
                            achievements in proficiency. All learners in each study used Duolingo as their only
                            learning tool and had little to no prior knowledge of their target language.
                        </div>

                        <div className="px-[20px] w-full md:w-auto pt-6">

                            <ul className="flex justify-center">
                                <li className="list-disc">
                                    The first study tested 225 Duolingo learners from the U.S. who had reached the end of Unit 5,
                                    the beginner-level section of the course. These learners performed as well on reading and
                                    listening tests as students who had completed four semesters of university language instruction.
                                    ( <a href="#/efficacy">View full research report</a> | <a href="#/efficacy">Read blog post</a>  )
                                </li>
                            </ul>

                            <ul className="flex justify-center pt-2">
                                <li className="list-disc">
                                    The second study tested 340 learners from across the globe who had reached the end of Unit 7,
                                    just halfway through the intermediate material of their course. These learners performed as well
                                    on reading and listening tests as students who had completed five semesters of university language instruction.
                                    ( <a href="#/efficacy">View full research report</a> | <a href="#/efficacy">Read blog post</a>  )
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}