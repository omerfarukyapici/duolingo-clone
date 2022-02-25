import '../Mobile/Mobile.css';

import duoTraveller from '../welcome_page_img/duo-traveler.svg';
import apple from '../welcome_page_img/apple.svg';
import android from '../welcome_page_img/android.svg';

const Mobile = () => {
    return (
        <div className="mobile numberOne flex justify-center pt-4 ">
            <div className="container mobile-mobile-desk flex justify-between p-[2.5rem] pb-9">
                <div className="textContent">
                    <h2 className="pt-3 font-bold text-[#3c3c3c]">Learn anytime, anywhere.</h2>
                    <p>
                        Learning a language on Duolingo is completely free, but you can remove ads and make faster progress with Plus. Try it free for 14 days!
                    </p>
                    <div className="flex">
                        <div>
                            <a className="flex hide-underline pr-3 font-bold text-[#4b4b4b] text-[13px] rounded-2xl border-2 border-[#e5e5e5]" target="_blank" href="https://apps.apple.com/app/duolingo-learn-spanish-french/id570060128">
                                <img className="w-[2.2rem] mr-3" src={apple} alt="" />
                                <div>
                                    <div>Download on the</div>
                                    <div>App Store</div>
                                </div>
                            </a>
                        </div>

                        <div className="pl-4">
                            <a className="flex hide-underline pr-3 font-bold text-[#4b4b4b] text-[13px] rounded-2xl border-2 border-[#e5e5e5]" target="_blank" href="https://play.google.com/store/apps/details?hl=en&id=com.duolingo&referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsplash">
                                <img className="w-[2.2rem] mr-3" src={android} alt="" />
                                <div>
                                    <div>Get it on</div>
                                    <div>Google Play</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pb-7">
                    <img className="w-[10rem] " src={duoTraveller} alt="" />
                </div>
            </div>





            <div className="mobile-mobile container flex justify-between p-[2.5rem] pb-9">
                <div className="flex justify-center pb-7">
                    <img className="w-[10rem] " src={duoTraveller} alt="" />
                </div>
                <div className="textContent">
                    <h2 className="pt-3 font-bold text-[#3c3c3c]">Boost your learning with Duolingo Plus</h2>
                    <p>
                        Learning a language on Duolingo is completely free, but you can remove ads and make faster progress with Plus. Try it free for 14 days!
                    </p>
                    <div className="flex justify-center not-center">
                        <div className="flex justify-center">
                            <a className="flex hide-underline pr-3 font-bold text-[#4b4b4b] text-[13px] rounded-2xl border-2 border-[#e5e5e5]" target="_blank" href="https://apps.apple.com/app/duolingo-learn-spanish-french/id570060128">
                                <img className="w-[2.2rem] mr-3" src={apple} alt="" />
                                <div>
                                    <div>Download on the</div>
                                    <div>App Store</div>
                                </div>
                            </a>
                        </div>

                        <div className="pl-4 zero-padding flex justify-center">
                            <a className="flex hide-underline pr-3 font-bold text-[#4b4b4b] text-[13px] rounded-2xl border-2 border-[#e5e5e5]" target="_blank" href="https://play.google.com/store/apps/details?hl=en&id=com.duolingo&referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsplash">
                                <img className="w-[2.2rem] mr-3" src={android} alt="" />
                                <div>
                                    <div>Get it on</div>
                                    <div>Google Play</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Mobile;