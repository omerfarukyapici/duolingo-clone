import BenfPerkComp from "./BenfPerkComp";

import benOne from '../../Careerİmg/benOne.svg';
import benTwo from '../../Careerİmg/benTwo.svg';
import benThree from '../../Careerİmg/benThree.svg';
import benFour from '../../Careerİmg/benFour.svg';
import benSix from '../../Careerİmg/benSix.svg';
import benSeven from '../../Careerİmg/benSeven.svg';
import benEight from '../../Careerİmg/benEight.svg';
import benNine from '../../Careerİmg/benNine.svg';
import benTen from '../../Careerİmg/benTen.svg';
import benEleven from '../../Careerİmg/benEleven.svg';
import benTwelve from '../../Careerİmg/benTwelve.svg';
import benThirteen from '../../Careerİmg/benThirteen.svg';
import benFourteen from '../../Careerİmg/benFourteen.svg';
import benFifteen from '../../Careerİmg/benFifteen.svg';
import benGame from '../../Careerİmg/benGame.svg';
import benToJob from '../../Careerİmg/benToJob.svg';

const Benefits = () => {

    const benefitDesc = {
        benOne: "Medical, dental, and vision for employees as well as eligible partners and dependents",
        benTwo: "Mental health benefits such as therapy sessions and coaching to support you to be your best self",
        benThree: "Fertility benefits to support your family planning journey",
        benFour: "Fully paid parental and adoption leave",
        benSix: "Fully paid subscription to Care.com and paid backup days for dependents and your fur family",
        benSeven: "401(k) with generous match and immediate vesting",
        benEight: "20 days of paid time off, with two additional weeks off for winter break",
        benNine: "First-time home buyer bonus (in Pittsburgh)",
        benTen: "Competitive salaries and equity",
        benEleven: "Yearly stipend for professional development",
        benToJob: "Transportation reimbursement for however you get to work  ",
        benTwelve: "Lunch prepared daily by our in-house chefs",
        benThirteen: "Annual international retreat for all full-time employees",
        benFourteen: "Monthly events celebrating our team and their amazing work",
        benFifteen: "On-site gym and massages",
        benGame: "Game room for taking brain breaks",
    }



    return (
        <div className="flex justify-center ">
            <div>
                <div>
                    <h1 className='text-[52px] font-bold text-[#58cc02] text-left px-3.5 py-7'>benefits & perks</h1>
                </div>

                <div className="pt-7 pb-[4rem]">
                    <div className="block md:flex ">
                        <BenfPerkComp
                            benefitİmg={benOne}
                            benefitDesc={benefitDesc.benOne}
                        />
                        <BenfPerkComp
                            benefitİmg={benTwo}
                            benefitDesc={benefitDesc.benTwo}
                        />
                    </div>
                    <div className="block md:flex ">
                        <BenfPerkComp
                            benefitİmg={benThree}
                            benefitDesc={benefitDesc.benThree}
                        />

                        <BenfPerkComp
                            benefitİmg={benFour}
                            benefitDesc={benefitDesc.benFour}
                        />

                    </div>
                    <div className="block md:flex ">
                        <BenfPerkComp
                            benefitİmg={benSix}
                            benefitDesc={benefitDesc.benSix}
                        />

                        <BenfPerkComp
                            benefitİmg={benSeven}
                            benefitDesc={benefitDesc.benSeven}
                        />

                    </div>
                    <div className="block md:flex ">
                        <BenfPerkComp
                            benefitİmg={benEight}
                            benefitDesc={benefitDesc.benEight}
                        />

                        <BenfPerkComp
                            benefitİmg={benNine}
                            benefitDesc={benefitDesc.benNine}
                        />

                    </div>
                    <div className="block md:flex ">
                        <BenfPerkComp
                            benefitİmg={benTen}
                            benefitDesc={benefitDesc.benTen}
                        />

                        <BenfPerkComp
                            benefitİmg={benEleven}
                            benefitDesc={benefitDesc.benEleven}
                        />

                    </div>
                    <div className="block md:flex ">
                        <BenfPerkComp
                            benefitİmg={benToJob}
                            benefitDesc={benefitDesc.benToJob}
                        />

                        <BenfPerkComp
                            benefitİmg={benTwelve}
                            benefitDesc={benefitDesc.benTwelve}
                        />

                    </div>
                    <div className="block md:flex ">
                        <BenfPerkComp
                            benefitİmg={benThirteen}
                            benefitDesc={benefitDesc.benThirteen}
                        />

                        <BenfPerkComp
                            benefitİmg={benFourteen}
                            benefitDesc={benefitDesc.benFourteen}
                        />

                    </div>
                    <div className="block md:flex ">
                        <BenfPerkComp
                            benefitİmg={benFifteen}
                            benefitDesc={benefitDesc.benFifteen}
                        />

                        <BenfPerkComp
                            benefitİmg={benGame}
                            benefitDesc={benefitDesc.benGame}
                        />

                    </div>
                </div>


            </div>
        </div>
    );
}

export default Benefits;