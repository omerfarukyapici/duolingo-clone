import OurComp from "./OurComp";
import ourOne from '../Pressİmg/ourOne.svg';
import ourTwo from '../Pressİmg/ourTwo.svg';
import ourThree from '../Pressİmg/ourThree.svg';


const Our = () => {
    return (
        <div className=" flex justify-center pt-[5rem] ">
            <div className="w-full lg:w-[978px] pb-[2rem] border-solid border-b-2 border-[#e5e5e5]">
                <OurComp
                    compClass="block lg:flex py-[1rem] px-2"
                    ourMobileİmg={ourOne}
                    title="our mission"
                    content="We’re here to develop the best education in the world and make it universally available.
                    Our global team works together to make language learning fun, free, and effective for anyone who wants to
                    learn, wherever they are."
                    ourİmg={ourOne}
                    contentClass="w-full lg:w-[520px] m-2 lg:m-20"

                    ourMobileİmgStyle={"w-full lg:w-[318px] "}
                    ourTwoİmgStyle={"w-full "}
                />
                <OurComp
                    compClass="block lg:flex py-[1rem] pl-0 lg:pl-16 px-2"
                    ourTwoİmg={ourTwo}
                    ourMobileİmg={ourTwo}
                    title="our story"
                    content="Duolingo was founded in 2011 by Luis von Ahn and Severin Hacker. The Duolingo app launched in 2012 and
                    has since become the most popular way to learn a language and one of the most downloaded education apps in the 
                    world."
                    ourİmg=""
                    contentClass="w-full lg:w-[500px] pl-0 lg:pl-10 m-2 lg:m-20"

                    ourMobileİmgStyle={"w-full lg:w-[318px] "}
                    ourTwoİmgStyle={"w-full "}
                />
                <OurComp
                    compClass="block lg:flex py-[1rem] px-2"
                    ourMobileİmg={ourThree}
                    title="our offices"
                    content="We’re headquartered in Pittsburgh, Pennsylvania. Called the City of Bridges, it’s where we’re making
                    language learning a bridge to opportunity for millions around the world. We also have offices in New York,
                    Seattle, Beijing, and Berlin."
                    ourİmg={ourThree}
                    contentClass="w-full lg:w-[520px] m-2 lg:m-20"

                    ourMobileİmgStyle={"w-full lg:w-[318px] "}
                    ourTwoİmgStyle={"w-full "}
                />
            </div>
        </div>
    );
}
export default Our;