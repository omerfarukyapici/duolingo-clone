import "../../assets/styles/efficacy.css";
import levelOne from '../../assets/img/efficacy/level.svg';
import levelTwo from '../../assets/img/efficacy/level-2.svg';

export const Levels = () => {
    return (
        <div className=" e-level flex justify-center">
            <div className="e-level-Container flex justify-center px-6">
                <div>
                    <div className=" block md:flex justify-between e-makeAuto ">
                        <div className="beCenter">
                            <img className="e-img" src={levelOne} alt="" />
                        </div>
                        <div className="px-6 pl-6 md:pl-14 ">
                            <h2 className="pt-8">
                                A Curriculum Based on Best Practices and Standards
                            </h2>
                            <p>
                                Duolingo uses implicit teaching to foster long-term retention
                                and to promote communication in the new language. Duolingo courses
                                are aligned to the Common European Framework of Reference (CEFR),
                                an international standard for language proficiency. Read more about
                                our <a className="e-blue" href="#/efficacy">approach to teaching</a> and check out this <a className="e-blue" href="#/efficacy">blog post</a> on curriculum
                                design and course creation.
                            </p>
                        </div>
                    </div>

                    <div className=" block md:flex justify-between e-makeAuto pt-6 md:pt-20">
                        <div className="e-beBlock beCenter">
                            <img className="e-img flex sm:flex md:flex lg:hidden" src={levelTwo} alt="" />
                        </div>
                        <div className="px-6 pr-6 md:pr-14">
                            <h2 className="pt-8">
                                A Curriculum Based on Best Practices and Standards
                            </h2>
                            <p>
                                Duolingo uses implicit teaching to foster long-term retention
                                and to promote communication in the new language. Duolingo courses
                                are aligned to the Common European Framework of Reference (CEFR),
                                an international standard for language proficiency. Read more about
                                our approach to teaching and check out this <a className="e-blue" href="#/efficacy">blog post</a> on curriculum
                                design and course creation.
                            </p>
                        </div>
                        <div className="e-beHide beCenter" >
                            <img className=" e-img hidden sm:hidden md:hidden lg:flex" src={levelTwo} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}