import JopComp from './JobComp';
import './ReSearch.css';

import top from './ReSearchİmg/triangle.svg';

const Footer = () => {
    return (
        <div className="ReSearch-Footer py-[9rem] lg:py-[5rem] bg-[#27355b] flex justify-center">
            <div className="">
                <div className="text-center">
                    <h1 className="leading-[70px] text-[2rem] md:text-[3.3rem] text-white font-bold pb-[3rem] lg:pb-[5rem]">Ready to work with us?</h1>
                </div>
                <div className="flex justify-center" >
                    <div className="w-auto md:w-[522px] px-4">

                        <JopComp
                            title="AI + Machine Learning"
                            content="Develop ML-driven technologies for novel applications in language,
                            learning, and assessment that are used by millions of people every day."
                        />
                        <JopComp
                            title="Data Science + Analytics"
                            content="Support data-driven product decisions and generate insights to guide
                            product development for millions of learners worldwide."
                        />
                        <JopComp
                            title="Learning + Curriculum"
                            content="Help improve how millions of people learn languages on Duolingo."
                        />
                        <a className="SeeAllJobs" href="#/career">
                            <div className="flex justify-center bg-[#1cb0f6] rounded-2xl text-white font-medium py-5" >
                                SEE ALL JOBS
                            </div>
                        </a>
                        <div className="flex justify-center lg:justify-end pt-[3rem] lg:pt-0 ">
                            <a className="relative -right-0 lg:-right-[15rem] -top-0 lg:-top-10" href="#/research" >
                                <div className="flex justify-center">
                                    <img src={top} alt="" />
                                </div>

                                <span className="text-white font-bold leading-1.5 text-[1.0625rem]">Back to Top</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;