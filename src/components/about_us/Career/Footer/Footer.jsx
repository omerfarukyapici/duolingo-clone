import ApplyNow from "./Footer/ApplyNow";
import FooterNav from "./Footer/FooterNav";

const Footer = () => {
    return (
        <div>
            
            <ApplyNow />

            <div className="flex justify-center py-[50px] md:pb-[30px]">
                <p className="text-center w-auto lg:w-[1038px] text-[15px] text-[#6f6f6f] leading-1.47 px-4">
                    Duolingo is proud to be an Equal Employment Opportunity employer. We do not discriminate based upon race,
                    religion, color, national origin, gender (including pregnancy, childbirth, or related medical conditions),
                    sexual orientation, gender identity, gender expression, age, status as a protected veteran, status as an
                    individual with a disability, or other applicable legally protected characteristics.
                </p>
            </div>

            <FooterNav />
            
        </div>
    );
}

export default Footer;