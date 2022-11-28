import contentOne from "../../assets/img/duoForSchool/contentOne.svg"
import contentTwo from '../../assets/img/duoForSchool/contentTwo.svg';
import contentThree from '../../assets/img/duoForSchool/contentThree.svg';

const Content = () => {
    return (
        <div className="flex justify-center py-[7rem]">
            <div className="w-[826px] text-[#3C3C3C] px-4">

                <div className="block md:flex justify-between">
                    <div className="flex justify-center md:justify-left pr-10">
                        <img src={contentOne} alt='' />
                    </div>
                    <div className="w-full md:w-[508px]">
                        <h3 className="text-[25px] leading-9 py-[1rem] font-bold" >Fun and 100% free</h3>
                        <p>Access our extensive and engaging language education curriculum for free,
                            on any device — inside the classroom, at home, or on the go.
                        </p>
                    </div>
                </div>

                <hr className="my-[4rem] border-solid border-[#e5e5e5] border-[1.2px]" />

                <div className="block md:flex justify-between">
                    <div className="  flex justify-center md:hidden md:justify-left">
                        <img src={contentTwo} alt='' />
                    </div>
                    <div className="w-full md:w-[508px] ">
                        <h3 className="text-[25px] leading-9 py-[1rem] font-bold">Complements your curriculum</h3>
                        <p>Tailor Duolingo to your teaching objectives with customizable assignments and lessons,
                            keeping your students learning both in and out of the classroom.
                        </p>
                    </div>
                    <div className="hidden md:flex justify-center md:justify-left">
                        <img src={contentTwo} alt='' />
                    </div>
                </div>

                <hr className="my-[4rem] border-solid border-[#e5e5e5] border-[1.2px]" />

                <div className="block md:flex justify-between">
                    <div className="flex justify-center md:justify-left">
                        <img src={contentThree} alt='' />
                    </div>
                    <div className="w-full md:w-[508px]">
                        <h3 className="text-[25px] leading-9 py-[1rem] font-bold">Personalized and self-paced</h3>
                        <p>Meet each language learner exactly where they are and increase their
                            learning independence with assignments powered by our personalized learning engine.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Content;