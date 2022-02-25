import '../Footer/Footer.css';
import React from "react";
import { FooterLinkComp } from './FooterLinkComp';



const Footer = () => {

    return (
        <div className="footer flex justify-center ">


            
            <div className="container">
                <div className="flex justify-center mx-[48px]">
                    <h1 className="font-bold text-white footer-text " >Learn a language with Duolingo.</h1>
                    <a className="h-[3rem] w-[8rem] get-started px-3 pt-2 pb-4 ml-5 mr-2 shadow rounded-2xl bg-[#58cc02] text-white font-bold" href="#/Learn">
                        GET STARTED
                    </a>
                </div>
                <div className='flex justify-center pb-10 '>
                    <a className="text-center h-[3rem] w-[15rem] footer-mb get-started px-3 pt-2 pb-4 ml-5 mr-2 shadow rounded-2xl bg-[#58cc02] text-white font-bold" href="#/Learn">
                        GET STARTED
                    </a>
                </div>
                <div className='footer-links grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                    <div className='list-div'>
                        <ul>
                            <FooterLinkComp
                                linkStyle={"hidden"}
                                normalContent={"About us"}
                                listStyle={"first-li"}
                            />

                            <FooterLinkComp
                                linkAddress={"#/coursemain"}
                                linkName={"Courses"}
                            />

                            <FooterLinkComp
                                linkAddress={"#/duoaboutus"}
                                linkName={"Mission"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Approach"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/efficacy"}
                                linkName={"Efficacy"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Team"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/research"}
                                linkName={"Research"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Incubator"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/career"}
                                linkName={"Careers"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Brand guidelines"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/press"}
                                linkName={"Press"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Investors"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Contact us"}
                            />

                        </ul>
                    </div>
                    <div className='list-div'>
                        <ul>
                            <FooterLinkComp
                                linkStyle={"hidden"}
                                normalContent={"Products"}
                                listStyle={"first-li"}
                            />

                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Duolingo"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/duoforschool"}
                                linkName={"Duolingo for Schools"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Duolingo English Test"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/abc"}
                                linkName={"Duolingo ABC"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Duolingo Events"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Podcast"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/stories"}
                                linkName={"Stories"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Dictionary"}
                            />


                        </ul>
                    </div>
                    <div className='list-div'>
                        <ul>
                            <FooterLinkComp
                                linkStyle={"hidden"}
                                normalContent={"Apps"}
                                listStyle={"first-li"}
                            />

                            <FooterLinkComp
                                linkAddress={"https://play.google.com/store/apps/details?hl=en&id=com.duolingo&referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsite_map"}
                                linkName={"Duolingo for Android"}
                            />
                            <FooterLinkComp
                                linkAddress={"https://apps.apple.com/app/duolingo-learn-spanish-french/id570060128"}
                                linkName={"Duolingo for İOS"}
                            />
                            <FooterLinkComp
                                linkAddress={"https://apps.apple.com/app/duolingo-abc-learn-to-read/id1440502568"}
                                linkName={"Duolingo ABC (İOS)"}
                            />

                        </ul>
                    </div>
                    <div className='list-div'>
                        <ul>
                            <FooterLinkComp
                                linkStyle={"hidden"}
                                normalContent={"Help and support"}
                                listStyle={"first-li"}
                            />

                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Discussion"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Troubleshopting"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Duolingo FAQs"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Schools FAQs"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Duolingo English Test FAQs"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Status"}
                            />
                        </ul>
                    </div>
                    <div className='list-div'>
                        <ul>
                            <FooterLinkComp
                                linkStyle={"hidden"}
                                normalContent={"Privacy and terms"}
                                listStyle={"first-li"}
                            />

                            <FooterLinkComp
                                linkAddress={"#/communityguide"}
                                linkName={"Community guidelines"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/terms"}
                                linkName={"Terms"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/privacy"}
                                linkName={"Privacy"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={'Respecting your "do not sell my personal information " rights'}
                            />


                            <ul className='pt-4'>

                                <FooterLinkComp
                                    linkStyle={"hidden"}
                                    normalContent={"Social"}
                                    listStyle={"first-li"}
                                />

                                <FooterLinkComp
                                    linkAddress={"#/"}
                                    linkName={"Blog"}
                                />
                                <FooterLinkComp
                                    linkAddress={"https://www.instagram.com/duolingo/"}
                                    linkName={"Instagram"}
                                />
                                <FooterLinkComp
                                    linkAddress={"https://www.facebook.com/duolingo"}
                                    linkName={"Facebook"}
                                />
                                <FooterLinkComp
                                    linkAddress={"https://twitter.com/duolingo"}
                                    linkName={"Twitter"}
                                />
                                <FooterLinkComp
                                    linkAddress={"https://www.youtube.com/user/duolingo"}
                                    linkName={"YouTube"}
                                />
                            </ul>

                        </ul>
                    </div>
                </div>
                <div className='footer-links-2'>
                    <div className='text-[15px] my-[6px] font-bold'>Site language:</div>
                    <div>
                        <ul className=' '>
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"العربية"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Čeština"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Deutsch"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Ελληνικά"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"English"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Español"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Français"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"हिंदी"}
                            />
                        
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Magyar"}
                            />


                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Bahasa Indonesia"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Italiano"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"日本語"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"한국어"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Nederlands"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Polski"}
                            />


                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Português"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Română"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Русский"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"ภาษาไทย"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Türkçe"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Українською"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"Tiếng Việt"}
                            />
                            <FooterLinkComp
                                linkAddress={"#/"}
                                linkName={"中文"}
                            />

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;