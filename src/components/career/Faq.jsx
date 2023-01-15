import QuestionsComp from "./QuestionsComp";

const Faq = () => {
    return (
        <div className="py-4 lg:py-20 px-4 flex justify-center">
            <div>

                <div className="flex justify-center text-center pb-14">
                    <h2 className="w-full lg:w-[700px] text-[50px] md:text-[72px] text-[#58cc02] font-bold">frequently asked questions</h2>
                </div>

                <div>
                    <QuestionsComp
                        questionContent={"What does Duolingo look for in hires?"}
                        partOne="We search all around the world for the best software engineers, product managers, 
                    designers, and other talented people who are passionate about our mission and want to use their 
                    expertise to change the world for the better."
                        partOneStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partTwoStyle={"hidden"}
                        partThreeStyle={"hidden"}
                        partFourStyle={"hidden"}
                    />
                    <QuestionsComp
                        questionContent={"Where is Duolingo’s office located?"}
                        partOne="Our home office is in Pittsburgh, PA, and the vast majority of the company works here. We have additional offices in
                     Beijing, China; Berlin, Germany; New York, NY; and Seattle, WA. Pittsburgh is where our new graduates and interns are located,
                      except for a few new graduates in our Beijing office!"
                        partOneStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partTwoStyle={"hidden"}
                        partThreeStyle={"hidden"}
                        partFourStyle={"hidden"}
                    />
                    <QuestionsComp
                        questionContent={"I applied online. What is the next step?"}
                        partOne="If the team is interested in moving forward, we’ll aim to reach out within ~three weeks of submitting your application!"
                        partOneStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partTwoStyle={"hidden"}
                        partThreeStyle={"hidden"}
                        partFourStyle={"hidden"}
                    />
                    <QuestionsComp
                        questionContent={"What is working at Duolingo like?"}
                        partOne="We work together in small, cross-functional teams to change the world, one word at a time. Our team of kind, thoughtful
                     humans includes software engineers, product managers, designers, language scientists, business strategists, marketers, content 
                     creators, writers, and researchers."
                        partTwo="We believe in making language learning available to everyone. That means we have to continuously make Duolingo better, 
                     especially as we grow worldwide. We A/B test and measure everything to ensure we’re constantly making Duolingo better. Talent
                      development is also important to us: in addition to learning on a daily basis from your teammates, you will be paired with a 
                      mentor who will help you learn and grow in your career at Duolingo. You’ll get real results from your work and learn what it 
                      takes to ship features that perform well for language learners."
                        partOneStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partTwoStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partThreeStyle={"hidden"}
                        partFourStyle={"hidden"}
                    />
                    <QuestionsComp
                        questionContent={"Do I have to speak more than one language to work at Duolingo?"}
                        partOne="Not at all! Duolingo, however, is a great place to pick up new language skills. We speak over 30 languages fluently 
                    within our office, and many Duos are bilingual and polyglots."
                        partOneStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partTwoStyle={"hidden"}
                        partThreeStyle={"hidden"}
                        partFourStyle={"hidden"}
                    />
                    <QuestionsComp
                        questionContent={"What is the interview process?"}
                        partOne="Our teams review the (many!) applications we receive and will reach out to selected candidates for next steps. During 
                    the interview process, you will have the chance to speak with people from various backgrounds and levels. Our final interview step
                     is a half-day or full-day interview, where you will get to interact with people across various roles and functions within the company."
                        partTwo="Our interviews are interactive and typically include tasks relevant to your role (ex. pair programming for engineers, funnel analysis 
                        for product managers, design exercises for designers). Some of our engineering interviews utilize CodePair. (You can learn more about 
                            engineering interviews at Duolingo here.) Our design sense interview utilizes Figma."
                        partThree="The interviews are designed to focus on hearing our candidates’ reactions and reflections rather than looking for moments 
                    to trick them. We know interviews can be stressful, so we do our best to make candidates feel welcome and comfortable at every step of 
                    the process."
                        partFour="During COVID-19, all interviews are currently conducted remotely via Zoom. For certain interviews, screen sharing may be involved."
                        partOneStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partTwoStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partThreeStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partFourStyle="text-left pt-[.7rem] pb-[.2rem]"
                    />
                    <QuestionsComp
                        questionContent={"I applied for a role and was not selected. Can I reapply?"}
                        partOne="You are welcome to apply again for any role for which you see a good fit. Most successful re-applicants usually wait six months to a year, 
                    so they can improve their skill set, take on new challenges, and have something new to share."
                        partOneStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partTwoStyle={"hidden"}
                        partThreeStyle={"hidden"}
                        partFourStyle={"hidden"}
                    />
                    <QuestionsComp
                        questionContent={"Can I apply for multiple positions?"}
                        partOne="You are welcome to apply for any positions you are interested in! However, we do find it 
                    the most successful to apply for one or two roles that best match the position requirements and your qualifications."
                        partOneStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partTwoStyle={"hidden"}
                        partThreeStyle={"hidden"}
                        partFourStyle={"hidden"}
                    />
                    <QuestionsComp
                        questionContent={"What if I need an accommodation for my interview?"}
                        partOne="We will do everything we can within reason to make sure that your interview takes place in an environment that fairly and accurately 
                    assesses your skills. If you need assistance or accommodation, please contact your recruiter."
                        partOneStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partTwoStyle={"hidden"}
                        partThreeStyle={"hidden"}
                        partFourStyle={"hidden"}
                    />
                    <QuestionsComp
                        questionContent={"How can I learn more about Duolingo?"}
                        partOne="Visit the Duolingo blog to learn about our team, our mission, and the process behind bringing our work to the world.
                     You can also learn about Design at Duolingo here."
                        partOneStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partTwoStyle={"hidden"}
                        partThreeStyle={"hidden"}
                        partFourStyle={"hidden"}
                    />
                    <QuestionsComp
                        questionContent={"What is Duolingo’s office policy due to COVID-19?"}
                        partOne="Our offices are important to our culture! We are eager and hopeful to get back together.
                     As part of our return to office plan, we are offering a hybrid schedule, where employees work in the office Tuesdays
                      through Thursdays, with the option to work from home or in the office on Mondays and Fridays."
                        partTwo="Because Duolingo intends to require all employees to return to work from an office, all employees will need to be fully 
                      vaccinated against COVID-19 and have received any booster doses as recommended by the Centers for Disease Control and Prevention
                       to remain employed unless they have an exemption to vaccination pursuant to a required reasonable accommodation. This is so that 
                       our employees feel safe in the office."
                        partOneStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partTwoStyle="text-left pt-[.7rem] pb-[.2rem]"
                        partThreeStyle={"hidden"}
                        partFourStyle={"hidden"}
                    />
                </div>
            </div>

        </div>
    );
}


export default Faq;