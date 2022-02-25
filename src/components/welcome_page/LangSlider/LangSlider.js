import '../LangSlider/LangSlider.css';

import Slider from "react-slick";

import es from '../welcome_page_img/es.svg';
import french from '../welcome_page_img/french.svg';
import german from '../welcome_page_img/german.svg';
import italiano from '../welcome_page_img/italiano.svg';
import pt from '../welcome_page_img/pt.svg';
import nl from '../welcome_page_img/nl.svg';
import ja from '../welcome_page_img/ja.svg';
import arabic from '../welcome_page_img/arabic.svg';
import cs from '../welcome_page_img/cs.svg';
import cy from '../welcome_page_img/cy.svg';
import da from '../welcome_page_img/da.svg';
import el from '../welcome_page_img/el.svg';
import eo from '../welcome_page_img/eo.svg';
import fi from '../welcome_page_img/fi.svg';
import ga from '../welcome_page_img/ga.svg';
import he from '../welcome_page_img/he.svg';
import gd from '../welcome_page_img/gd.svg';
import hi from '../welcome_page_img/hi.svg';
import magyar from '../welcome_page_img/magyar.svg';
import hv from '../welcome_page_img/hv.svg';
import hw from '../welcome_page_img/hw.svg';
import id from '../welcome_page_img/id.svg';
import ko from '../welcome_page_img/ko.svg';
import la from '../welcome_page_img/la.svg';
import nobo from '../welcome_page_img/no-bo.svg';
import nv from '../welcome_page_img/nv.svg';
import polski from '../welcome_page_img/polski.svg';
import rom from '../welcome_page_img/rom.svg';
import ru from '../welcome_page_img/ru.svg';
import sv from '../welcome_page_img/sv.svg';
import sw from '../welcome_page_img/sw.svg';
import tlh from '../welcome_page_img/tlh.svg';
import tr from '../welcome_page_img/tr.svg';
import uk from '../welcome_page_img/uk.svg';
import vi from '../welcome_page_img/vi.svg';
import yi from '../welcome_page_img/yi.svg';
import zhc from '../welcome_page_img/zh-c.svg';
import LangComponent from './langComponent';


const Languages = () => {
    const settings = {
        className: "slider variable-width",
        infinite: true,
        centerMode: false,
        variableWidth: true
    };


    return (
        <div className="bg-[#0a4a82] langSlider">
            <div className="langSlider-container pt-5 pb-6 mx-auto">
                <Slider {...settings} className='pt-1'>

                    {/* Trying to use "Useful component" */}


                    {/* Useful componentler ile çalışıyor şu an tek eksiği ekranda biraz daha paddingi olmalı sliderın genel olarak. */}

                    <LangComponent
                        linkAdress="#/"
                        languageFrag={es}
                        language="SPANİSH"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={french}
                        language="FRENCH"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={german}
                        language="GERMAN"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={italiano}
                        language="ITALIAN"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={pt}
                        language="PORTUGUESE"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={nl}
                        language="DUTCH"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={ja}
                        language="JAPANESE"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={arabic}
                        language="ARABIC"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={cs}
                        language="CZECH"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={cy}
                        language="WELSH"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={da}
                        language="DANISH"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={el}
                        language="GREEK"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={eo}
                        language="ESPERANTO"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={fi}
                        language="FINNISH"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={ga}
                        language="IRISH"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={gd}
                        language="SCOTTISH GAELIC"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={he}
                        language="HEBREW"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={hi}
                        language="HINDI"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={magyar}
                        language="HUNGARIAN"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={hv}
                        language="HIGH VALYRIAN"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={hw}
                        language="HAWAIIAN"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={id}
                        language="INDONESIAN"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={ko}
                        language="KOREAN"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={la}
                        language="LATIN"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={nobo}
                        language="NORWEGIAN"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={nv}
                        language="NAVAJO"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={polski}
                        language="POLISH"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={rom}
                        language="ROMANIAN"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={ru}
                        language="RUSSIAN"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={sv}
                        language="SWEDISH"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={sw}
                        language="SWAHILI"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={tlh}
                        language="KLINGON"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={tr}
                        language="TURKISH"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={uk}
                        language="UKRAINIAN"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={vi}
                        language="VİETNAMESE"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={yi}
                        language="YIDDISH"
                    />
                    <LangComponent
                        linkAdress="#/"
                        languageFrag={zhc}
                        language="CHINESE"
                    />
                </Slider>
            </div>
        </div>

    );
}

export default Languages;