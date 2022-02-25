import StoriesHeader from '../../about_us/Courses/Header/Header.js';
import StoriesFooter from '../../about_us/Courses/Footer/Footer.js';

import es from '../../welcome_page/welcome_page_img/es.svg';
import pt from '../../welcome_page/welcome_page_img/pt.svg';
import french from '../../welcome_page/welcome_page_img/french.svg';
import german from '../../welcome_page/welcome_page_img/german.svg';
import italiano from '../../welcome_page/welcome_page_img/italiano.svg';
import ja from '../../welcome_page/welcome_page_img/ja.svg';


/* Useful Component */
import ContentLangComp from '../../about_us/Courses/Content/ContentLangComp.js';

const Stories = () => {
    window.scrollTo( window.x === 0, window.y === 0);
    
    return (
        <div>
            <StoriesHeader />


            <div className="pt-[8rem] md:pt-[10rem] flex justify-center ">
                <div className="w-[1080px] text-[#4b4b4b] text-center border-solid border-[#e5e5e5] border-b-[2px] px-[1rem] md:px-[12rem] ">
                    <h1 className="text-[34px] font-bold leading-7">Duolingo Stories</h1>
                    <p className="text-[19px] leading-snug my-[24px] pb-6 font-medium">Earn XP through mini-stories that challenge your reading and listening comprehension.
                        Select one of our supported languages to get started!
                    </p>
                </div>
            </div>



            <div className="c-Content flex justify-center">
                <div className="c-Content-container">
                    <div className="flex justify-end  sm:justify-between lg:justify-between pt-4 px-3">
                        <div className="hidden sm:block lg:block text-[#4b4b4b] text-[23px] font-bold ">
                            Stories for English Speakers
                        </div>
                        <div className="pt-1 ">
                            <button className="c-content-Lngs text-[#afafaf] font-bold px-[12px]">
                                I SPEAK ENGLISH
                            </button>
                        </div>
                    </div>

                    <div className="c-lang-cards flex justify-center pt-7 ">
                        <span class="inline-grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

                            <ContentLangComp
                                langFrag={es}
                                langName="Spanish"
                                learners="27.0M Learners"
                            />
                            <ContentLangComp
                                langFrag={pt}
                                langName="Portuguese"
                                learners="2.53M learners"
                            />
                            <ContentLangComp
                                langFrag={french}
                                langName="French"
                                learners="16.8M Learners"
                            />
                            <ContentLangComp
                                langFrag={german}
                                langName="German"
                                learners="9.25M learners"
                            />
                            <ContentLangComp
                                langFrag={italiano}
                                langName="Italian"
                                learners="6.19M learners"
                            />
                            <ContentLangComp
                                langFrag={ja}
                                langName="Japanese"
                                learners="11.7M learners"
                            />

                        </span>
                    </div>
                </div>
            </div>

            <StoriesFooter />
        </div>
    );
}

export default Stories;