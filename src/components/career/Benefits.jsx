import BenfPerkComp from "./BenfPerkComp";


import benOne from "../../assets/img/career/benOne.svg"
import benTwo from '../../assets/img/career/benTwo.svg';
import benThree from '../../assets/img/career/benThree.svg';
import benFour from '../../assets/img/career/benFour.svg';
import benSix from '../../assets/img/career/benSix.svg';
import benSeven from '../../assets/img/career/benSeven.svg';
import benEight from '../../assets/img/career/benEight.svg';
import benNine from '../../assets/img/career/benNine.svg';
import benTen from '../../assets/img/career/benTen.svg';
import benEleven from '../../assets/img/career/benEleven.svg';
import benTwelve from '../../assets/img/career/benTwelve.svg';
import benThirteen from '../../assets/img/career/benThirteen.svg';
import benFourteen from '../../assets/img/career/benFourteen.svg';
import benFifteen from '../../assets/img/career/benFifteen.svg';
import benGame from '../../assets/img/career/benGame.svg';
import benToJob from '../../assets/img/career/benToJob.svg';

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