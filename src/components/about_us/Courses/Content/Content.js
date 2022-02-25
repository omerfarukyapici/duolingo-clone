import '../CoursesMain.css';

import es from '../../../welcome_page/welcome_page_img/es.svg';
import french from '../../../welcome_page/welcome_page_img/french.svg';
import ja from '../../../welcome_page/welcome_page_img/ja.svg';
import german from '../../../welcome_page/welcome_page_img/german.svg';
import ko from '../../../welcome_page/welcome_page_img/ko.svg';
import italiano from '../../../welcome_page/welcome_page_img/italiano.svg';
import zh from '../../../welcome_page/welcome_page_img/zh-c.svg';
import hi from '../../../welcome_page/welcome_page_img/hi.svg';
import ru from '../../../welcome_page/welcome_page_img/ru.svg';
import arabic from '../../../welcome_page/welcome_page_img/arabic.svg';
import tr from '../../../welcome_page/welcome_page_img/tr.svg';
import pt from '../../../welcome_page/welcome_page_img/pt.svg';
import nl from '../../../welcome_page/welcome_page_img/nl.svg';
import la from '../../../welcome_page/welcome_page_img/la.svg';
import sv from '../../../welcome_page/welcome_page_img/sv.svg';
import vi from '../../../welcome_page/welcome_page_img/vi.svg';
import ga from '../../../welcome_page/welcome_page_img/ga.svg';
import el from '../../../welcome_page/welcome_page_img/el.svg';
import polski from '../../../welcome_page/welcome_page_img/polski.svg';
import nobo from '../../../welcome_page/welcome_page_img/no-bo.svg';
import he from '../../../welcome_page/welcome_page_img/he.svg';
import id from '../../../welcome_page/welcome_page_img/id.svg';
import hw from '../../../welcome_page/welcome_page_img/hw.svg';
import da from '../../../welcome_page/welcome_page_img/da.svg';
import fi from '../../../welcome_page/welcome_page_img/fi.svg';
import ro from '../../../welcome_page/welcome_page_img/rom.svg';
import hv from '../../../welcome_page/welcome_page_img/hv.svg';
import cy from '../../../welcome_page/welcome_page_img/cy.svg';
import cs from '../../../welcome_page/welcome_page_img/cs.svg';
import gd from '../../../welcome_page/welcome_page_img/gd.svg';
import yi from '../../../welcome_page/welcome_page_img/yi.svg';
import uk from '../../../welcome_page/welcome_page_img/uk.svg';
import sw from '../../../welcome_page/welcome_page_img/sw.svg';
import magyar from '../../../welcome_page/welcome_page_img/magyar.svg';
import tlh from '../../../welcome_page/welcome_page_img/tlh.svg';
import eo from '../../../welcome_page/welcome_page_img/eo.svg';
import nv from '../../../welcome_page/welcome_page_img/nv.svg';
import ContentLangComp from './ContentLangComp';



const Content = () => {
    return (
        <div className="c-Content flex justify-center">
            <div className="c-Content-container">
                <div className="flex justify-end  sm:justify-between lg:justify-between pt-4 px-3">
                    <div className="hidden sm:block lg:block text-[#4b4b4b] text-[23px] font-bold ">
                        Language Courses for English Speakers
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
                            langFrag={french}
                            langName="French"
                            learners="16.8M Learners"
                        />
                        <ContentLangComp
                            langFrag={ja}
                            langName="Japanese"
                            learners="11.7M learners"
                        />
                        <ContentLangComp
                            langFrag={german}
                            langName="German"
                            learners="9.25M learners"
                        />

                        <ContentLangComp
                            langFrag={ko}
                            langName="Korean"
                            learners="8.54M learners"
                        />
                        <ContentLangComp
                            langFrag={italiano}
                            langName="Italian"
                            learners="6.19M learners"
                        />
                        <ContentLangComp
                            langFrag={zh}
                            langName="Chinese"
                            learners="5.51M learners"
                        />
                        <ContentLangComp
                            langFrag={hi}
                            langName="Hindi"
                            learners="5.07M learners"
                        />

                        <ContentLangComp
                            langFrag={ru}
                            langName="Russian"
                            learners="4.50M learners"
                        />
                        <ContentLangComp
                            langFrag={arabic}
                            langName="Arabic"
                            learners="3.44M learners"
                        />
                        <ContentLangComp
                            langFrag={tr}
                            langName="Turkish"
                            learners="2.78M learners"
                        />
                        <ContentLangComp
                            langFrag={pt}
                            langName="Portuguese"
                            learners="2.53M learners"
                        />
                        <ContentLangComp
                            langFrag={nl}
                            langName="Dutch"
                            learners="1.55M learners"
                        />
                        <ContentLangComp
                            langFrag={la}
                            langName="Latin"
                            learners="1.40M learners"
                        />
                        <ContentLangComp
                            langFrag={sv}
                            langName="Swedish"
                            learners="1.27M learners"
                        />
                        <ContentLangComp
                            langFrag={vi}
                            langName="Vietnamese"
                            learners="1.20M learners"
                        />
                        <ContentLangComp
                            langFrag={ga}
                            langName="Irish"
                            learners="1.16M learners"
                        />
                        <ContentLangComp
                            langFrag={el}
                            langName="Greek"
                            learners="1.15M learners"
                        />
                        <ContentLangComp
                            langFrag={polski}
                            langName="Polish"
                            learners="1.04M learners"
                        />
                        <ContentLangComp
                            langFrag={nobo}
                            langName="Norwegian (Bokmål)"
                            learners="1.00M learners"
                        />
                        <ContentLangComp
                            langFrag={he}
                            langName="Hebrew"
                            learners="879K learners"
                        />
                        <ContentLangComp
                            langFrag={id}
                            langName="Indonesian"
                            learners="636K learners"
                        />
                        <ContentLangComp
                            langFrag={hw}
                            langName="Hawaiian"
                            learners="577K learners"
                        />
                        <ContentLangComp
                            langFrag={da}
                            langName="Danish"
                            learners="552K learners"
                        />
                        <ContentLangComp
                            langFrag={fi}
                            langName="Finnish"
                            learners="548K learners"
                        />
                        <ContentLangComp
                            langFrag={ro}
                            langName="Romanian"
                            learners="515K learners"
                        />
                        <ContentLangComp
                            langFrag={hv}
                            langName="High Valyrian"
                            learners="502K learners"
                        />
                        <ContentLangComp
                            langFrag={cy}
                            langName="Welsh"
                            learners="490K learners"
                        />
                        <ContentLangComp
                            langFrag={cs}
                            langName="Czech"
                            learners="452K learners"
                        />
                        <ContentLangComp
                            langFrag={gd}
                            langName="Scottish Gaelic"
                            learners="427K learners"
                        />
                        <ContentLangComp
                            langFrag={yi}
                            langName="Yiddish"
                            learners="422K learners"
                        />
                        <ContentLangComp
                            langFrag={uk}
                            langName="Ukrainian"
                            learners="380K learners"
                        />
                        <ContentLangComp
                            langFrag={sw}
                            langName="Swahili"
                            learners="379K learners"
                        />
                        <ContentLangComp
                            langFrag={magyar}
                            langName="Hungarian"
                            learners="335K learners"
                        />
                        <ContentLangComp
                            langFrag={tlh}
                            langName="Klingon"
                            learners="302K learners"
                        />
                        <ContentLangComp
                            langFrag={eo}
                            langName="Esperanto"
                            learners="290K learners"
                        />
                        <ContentLangComp
                            langFrag={nv}
                            langName="Navajo"
                            learners="290K learners"
                        />

                    </span>
                </div>
            </div>
        </div>
    );
}

export default Content;