import './DuoAboutUs.css';

import approachOne from './AboutUsİmg/approachOne.svg';
import approachTwo from './AboutUsİmg/approachTwo.svg';

import approachThree from './AboutUsİmg/approachThree.svg';
import approachFour from './AboutUsİmg/approachFour.svg';

import approachFive from './AboutUsİmg/approachFive.svg';
import approachSix from './AboutUsİmg/approachSix.svg';


const Approach = () => {
    return (
        <div className="DuoAboutUs-Approach py-10 px-3 w-auto lg:w-[900px] flex justify-center">

            <div>

                {/* Entry */}

                <div className="approach-line pb-8">
                    <h2 className="test-[#3c3c3c] text-[24px] leading-7 font-bold mb-[24px]">Our teaching approach</h2>
                    <p className="pb-[18px] text-[#777] text-[17px] leading-6">We believe that anyone can learn a language with Duolingo. Our free,
                        bite-size lessons feel more like a game than a textbook,
                        and that's by design: Learning is easier when you're having fun.
                    </p>
                    <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                        But Duolingo isn't just a game. It's based on a methodology proven to foster long-term retention,
                        and a curriculum aligned to an international standard. Let's explore how language learning happens
                        with Duolingo!
                    </p>
                </div>


                {/* Section One */}


                <div className="approach-line block lg:flex justify-between py-8">
                    <div className="flex justify-center pb-10">
                        <img className="w-full" src={approachOne} alt="" />
                    </div>
                    <div className="w-auto lg:w-[540px]">
                        <h2 className="test-[#3c3c3c] text-[24px] leading-7 font-bold mb-[24px]">Real-life communication</h2>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            Language is ultimately a communication tool. Duolingo takes a functional approach by
                            focusing on what learners actually want to do with a language.
                        </p>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            Lessons focus on a real-life goal — for instance, ordering at a restaurant.
                            Learners develop the vocabulary and grammar needed to achieve that goal through
                            lots of varied practice in reading, writing, listening, and speaking.
                        </p>
                    </div>
                </div>


                {/* Section Two */}


                <div className="approach-line block lg:flex justify-between py-8">
                    <div className="flex justify-center lg:hidden">
                        <img src={approachTwo} alt="" />
                    </div>
                    <div className="w-auto lg:w-[540px] pt-10">
                        <h2 className="test-[#3c3c3c] text-[24px] leading-7 font-bold mb-[24px]">Standout content</h2>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            Along with commonly used phrases like "¿Dónde está el baño?" (Where is the bathroom?),
                            Duolingo learners also encounter sentences like "Tu oso bebe cerveza" (Your bear drinks beer).
                        </p>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            Why the quirky sentences? They're memorable and more fun to learn.
                            Our unexpected content also pushes learners to think carefully about the language they're learning.
                        </p>
                    </div>
                    <div className="hidden lg:flex justify-center">
                        <img className="w-[300px]" src={approachTwo} alt="" />
                    </div>
                </div>


                {/* Section Three */}


                <div className="approach-line block lg:flex justify-between py-8">
                    <div className="flex justify-center pb-10">
                        <img className="w-full lg:w-[300px]" src={approachThree} alt="" />
                    </div>
                    <div className="w-auto lg:w-[540px]">
                        <h2 className="test-[#3c3c3c] text-[24px] leading-7 font-bold mb-[24px]">A balanced approach</h2>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            Duolingo allows learners to discover patterns on their own without needing to focus on language rules — the same way you
                            learned your first language as a child. This approach, called "implicit learning," is ideal for developing a strong
                            foundational knowledge of a language and its rules.
                        </p>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            But explicit instruction is useful for some concepts. So Duolingo offers both! In addition to lessons, learners can access
                            Tips for explanations on grammar, pronunciation, and helpful phrases.
                        </p>
                    </div>
                </div>


                {/* Section Four*/}



                <div className="approach-line block lg:flex justify-between py-8">
                    <div className="flex justify-center lg:hidden">
                        <img src={approachFour} alt="" />
                    </div>
                    <div className="w-auto lg:w-[540px] pt-10">
                        <h2 className="test-[#3c3c3c] text-[24px] leading-7 font-bold mb-[24px]">Personalization</h2>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            With over 500 million learners, you’d think personalized instruction would be tough to pull off. But we’re up for the challenge! Machine learning algorithms are always at work to serve up
                            learning material at just the right difficulty level for each learner.
                        </p>
                    </div>
                    <div className="hidden lg:flex justify-center">
                        <img className="w-full" src={approachFour} alt="" />
                    </div>
                </div>



                {/* Section Five */}



                <div className="approach-line block lg:flex justify-between py-8">
                    <div className="flex justify-center pb-10">
                        <img className="w-full lg:w-[300px]" src={approachFive} alt="" />
                    </div>
                    <div className="w-auto lg:w-[540px]">
                        <h2 className="test-[#3c3c3c] text-[24px] leading-7 font-bold mb-[24px]">Many ways to learn</h2>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            Learners benefit from varied exposure to language.
                            That's why we offer learning experiences like in-person events, interactive stories, and podcasts.
                        </p>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            These additional formats help learners with interaction, conversation,
                            and reading and listening comprehension — all valuable skills for real-world language practice!
                        </p>
                    </div>
                </div>


                {/* Section Six */}


                <div className="approach-line block lg:flex justify-between py-8">
                    <div className="flex justify-center lg:hidden">
                        <img src={approachSix} alt="" />
                    </div>
                    <div className="w-auto lg:w-[540px] pt-10">
                        <h2 className="test-[#3c3c3c] text-[24px] leading-7 font-bold mb-[24px]">Continuous improvement</h2>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            At Duolingo, we're committed to improvement. Test questions are embedded throughout our
                            courses to measure how learners are progressing — and to show where Duolingo can improve.
                        </p>
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                            We use the results to develop new and better courses, expand our universe of
                            language-learning tools, update our materials as languages evolve, and ensure we're
                            continuing to offer the best language education in the world. Like language, we never stand still.
                        </p>
                    </div>
                    <div className="hidden lg:flex justify-center">
                        <img className="w-[300px]" src={approachSix} alt="" />
                    </div>
                </div>



                <div className="pt-[3rem]">
                    <div className="flex justify-center">
                        <p className="pb-[18px] text-[#777] text-[17px] leading-6">
                        Have questions? <a className="font-bold text-[#1cb0f6]" href="#/">Contact us</a> or visit the <a className="font-bold text-[#1cb0f6]" href="#/">Making Duolingo blog</a>.
                        </p>
                    </div>
                    <div className="text-center flex justify-center">
                        <a href="#/learn" className="ApproachLink flex justify-center  bg-[#1cb0f6] text-white w-[180px] rounded-xl hover:bg-[#4dc3ff]">
                            <p className="text-[15px] font-bold leading-3 py-[1.2rem]">START LEARNING</p>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Approach;