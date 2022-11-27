import Slider from "react-slick";

import es from '../../assets/img/welcome/es.svg';
import french from '../../assets/img/welcome/french.svg';
import german from '../../assets/img/welcome/german.svg';
import italiano from '../../assets/img/welcome/italiano.svg';
import pt from '../../assets/img/welcome/pt.svg';
import nl from '../../assets/img/welcome/nl.svg';
import ja from '../../assets/img/welcome/ja.svg';
import arabic from '../../assets/img/welcome/arabic.svg';
import cs from '../../assets/img/welcome/cs.svg';
import cy from '../../assets/img/welcome/cy.svg';
import da from '../../assets/img/welcome/da.svg';
import el from '../../assets/img/welcome/el.svg';
import eo from '../../assets/img/welcome/eo.svg';
import fi from '../../assets/img/welcome/fi.svg';
import ga from '../../assets/img/welcome/ga.svg';
import he from '../../assets/img/welcome/he.svg';
import gd from '../../assets/img/welcome/gd.svg';
import hi from '../../assets/img/welcome/hi.svg';
import magyar from '../../assets/img/welcome/magyar.svg';
import hv from '../../assets/img/welcome/hv.svg';
import hw from '../../assets/img/welcome/hw.svg';
import id from '../../assets/img/welcome/id.svg';
import ko from '../../assets/img/welcome/ko.svg';
import la from '../../assets/img/welcome/la.svg';
import nobo from '../../assets/img/welcome/no-bo.svg';
import nv from '../../assets/img/welcome/nv.svg';
import polski from '../../assets/img/welcome/polski.svg';
import rom from '../../assets/img/welcome/rom.svg';
import ru from '../../assets/img/welcome/ru.svg';
import sv from '../../assets/img/welcome/sv.svg';
import sw from '../../assets/img/welcome/sw.svg';
import tlh from '../../assets/img/welcome/tlh.svg';
import tr from '../../assets/img/welcome/tr.svg';
import uk from '../../assets/img/welcome/uk.svg';
import vi from '../../assets/img/welcome/vi.svg';
import yi from '../../assets/img/welcome/yi.svg';
import zhc from '../../assets/img/welcome/zh-c.svg';
import LangComponent from "./langComponent";


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