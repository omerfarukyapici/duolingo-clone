import es from "../../assets/img/welcome/es.svg";
import french from '../../assets/img/welcome/french.svg';
import ja from '../../assets/img/welcome/ja.svg';
import german from '../../assets/img/welcome/german.svg';
import ko from '../../assets/img/welcome/ko.svg';
import italiano from '../../assets/img/welcome/italiano.svg';
import zh from '../../assets/img/welcome/zh-c.svg';
import hi from '../../assets/img/welcome/hi.svg';
import ru from '../../assets/img/welcome/ru.svg';
import arabic from '../../assets/img/welcome/arabic.svg';
import tr from '../../assets/img/welcome/tr.svg';
import pt from '../../assets/img/welcome/pt.svg';
import nl from '../../assets/img/welcome/nl.svg';
import la from '../../assets/img/welcome/la.svg';
import sv from '../../assets/img/welcome/sv.svg';
import vi from '../../assets/img/welcome/vi.svg';
import ga from '../../assets/img/welcome/ga.svg';
import el from '../../assets/img/welcome/el.svg';
import polski from '../../assets/img/welcome/polski.svg';
import nobo from '../../assets/img/welcome/no-bo.svg';
import he from '../../assets/img/welcome/he.svg';
import id from '../../assets/img/welcome/id.svg';
import hw from '../../assets/img/welcome/hw.svg';
import da from '../../assets/img/welcome/da.svg';
import fi from '../../assets/img/welcome/fi.svg';
import ro from '../../assets/img/welcome/rom.svg';
import hv from '../../assets/img/welcome/hv.svg';
import cy from '../../assets/img/welcome/cy.svg';
import cs from '../../assets/img/welcome/cs.svg';
import gd from '../../assets/img/welcome/gd.svg';
import yi from '../../assets/img/welcome/yi.svg';
import uk from '../../assets/img/welcome/uk.svg';
import sw from '../../assets/img/welcome/sw.svg';
import magyar from '../../assets/img/welcome/magyar.svg';
import tlh from '../../assets/img/welcome/tlh.svg';
import eo from '../../assets/img/welcome/eo.svg';
import nv from '../../assets/img/welcome/nv.svg';
import { ContentLangComp } from "./ContentLangComp";
import "../../assets/styles/courses.css";



export const Content = () => {
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

