/*  OurComp.js (from press page) */

import OurComp from "../../../Press/Our/OurComp";

import StudentOne from '../../Careerİmg/student.svg';
import StudentTwo from '../../Careerİmg/studentTwo.svg';
import StudentThree from '../../Careerİmg/studentThree.svg';

import teamOne from '../../Careerİmg/teamOne.png';
import teamTwo from '../../Careerİmg/teamTwo.png';
import teamThree from '../../Careerİmg/teamThree.png';

import '../../Career.css';

const Students = () => {
    return (
        <div className="flex justify-center">
            <div>
                <div className=" w-auto lg:w-[1080px] pb-10 lg:pb-20 border-b-[2px] border-solid border-[#d6d8da]">
                    <OurComp
                        compClass="block lg:flex py-[2rem] lg:py-0 px-2"
                        ourMobileİmg={StudentOne}

                        ourMobileİmgStyle={"w-full lg:w-[318px] "}
                        ourTwoİmgStyle={"w-full "}

                        title="our mission"
                        content="We’re here to develop the best education in the world and make it universally available.
                Our global team works together to make language learning fun, free, and effective for anyone who wants to
                learn, wherever they are."
                        ourİmg={StudentOne}
                        

                        contentClass="w-full lg:w-[520px] m-2 lg:m-20"

                        careerStudentLink={""}
                        careerStudentLinkContent={"APPLY NOW"}
                    />
                    <OurComp
                        compClass="block lg:flex py-[2rem] lg:py-0 pl-2 lg:pl-16 px-2"
                        ourTwoİmg={StudentTwo}
                        ourMobileİmg={StudentTwo}
                        title="our offices"
                        content="We’re headquartered in Pittsburgh, Pennsylvania. Called the City of Bridges, it’s where we’re making language 
						learning a bridge to opportunity for millions around the world. We also have offices in New York, Seattle, Beijing, and Berlin."
                        ourİmg=""
                        contentClass="w-full lg:w-[500px] pl-0 lg:pl-10 m-2 lg:m-20"

                        careerStudentLink={""}
                        careerStudentLinkContent={"APPLY NOW"}

                        ourMobileİmgStyle={"w-full lg:w-[318px] "}
                        ourTwoİmgStyle={"w-full "}
                    />
                    <OurComp
                        compClass="block lg:flex py-[2rem] lg:pb-[1rem] px-2"
                        ourMobileİmg={StudentThree}
                        title="our mission"
                        content="We’re here to develop the best education in the world and make it universally available.
                Our global team works together to make language learning fun, free, and effective for anyone who wants to
                learn, wherever they are."
                        ourİmg={StudentThree}
                        contentClass="w-full lg:w-[520px] m-2 lg:m-20"

                        careerStudentLink={""}
                        careerStudentLinkContent={"APPLY NOW"}

                        ourMobileİmgStyle={"w-full lg:w-[318px] "}
                        ourTwoİmgStyle={"w-full "}
                    />
                </div>














                <div className="py-[4rem]">
                    <OurComp
                        compClass="block lg:flex py-[1rem] pl-2 lg:pl-16 px-2"
                        ourTwoİmg={teamOne}
                        ourMobileİmg={teamOne}
                        teamFeatures={"Impact"}
                        content="I'm able to improve how millions of people learn languages every day. My very first project was adding
                        Hindi and Indonesian to the iOS app! I love being part of a team focused on improving how we teach. It’s
                        inspiring to see how engineering can help reach that goal!"
                        teamDepartment={"— Sammi, Software Engineer"}
                        ourİmg=""
                        contentClass="w-full lg:w-[500px] pl-0 lg:pl-10 m-2 lg:m-20"
                        
                        teamLinkedinLink={""}
                        teamLinkedinİmgClass={" teamLinkedinİmg "}


                        ourMobileİmgStyle={"w-auto lg:w-[318px] rounded-[1rem]"}
                        ourTwoİmgStyle={"w-auto rounded-[1rem]"}
                    />
                    <OurComp
                        compClass="block lg:flex py-[1rem] px-2"
                        ourMobileİmg={teamTwo}
                        teamFeatures={"Mission"}
                        content="I joined Duolingo because of the diverse set of people, great sense of community
                        and the potential to make a difference to literally millions of people around the world.
                        I believe in accessible education for everyone, so joining the 'movers and shakers' at Duolingo 
                        was a no-brainer, and I am glad I did."
                        
                        teamDepartment={"— Jonathan, Software Engineer"}
                        ourİmg={teamTwo}
                        contentClass="w-full lg:w-[520px] m-2 lg:m-20"
                        
                        teamLinkedinLink={""}
                        teamLinkedinİmgClass={" teamLinkedinİmg "}


                        ourMobileİmgStyle={"w-auto lg:w-[318px] rounded-[1rem]"}
                        ourTwoİmgStyle={"w-auto rounded-[1rem]"}
                    />
                    <OurComp
                        compClass="block lg:flex py-[1rem] pl-2 lg:pl-16 px-2"
                        ourTwoİmg={teamThree}
                        ourMobileİmg={teamThree}
                        teamFeatures={"Innovation"}
                        content="We're encouraged to innovate and come up with new ways of teaching languages. When I first thought of
                        creating a Spanish podcast, I was given the creative freedom to define the format and see it through to completion.
                        Today, what started as a side project has over 15 million downloads and is the #1 educational podcast in the US!"
                        teamDepartment={"— Natalia, Product Manager"}
                        ourİmg=""
                        contentClass="w-full lg:w-[500px] pl-0 lg:pl-10 m-2 lg:m-20"
                        
                        teamLinkedinLink={""}
                        teamLinkedinİmgClass={" teamLinkedinİmg "}


                        ourMobileİmgStyle={"w-auto lg:w-[318px] rounded-[1rem]"}
                        ourTwoİmgStyle={"w-auto rounded-[1rem]"}  
                    />
                </div>
            </div>

        </div>

    );
}

export default Students;