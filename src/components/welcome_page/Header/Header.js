import '../Header/Header.css';
import logo from '../welcome_page_img/w_p_logo.svg';
import ar from '../welcome_page_img/arabic.svg';
import german from '../welcome_page_img/german.svg';
import en from '../welcome_page_img/america.svg';
import french from '../welcome_page_img/french.svg';
import magyar from '../welcome_page_img/magyar.svg';
import italiano from '../welcome_page_img/italiano.svg';
import ko from '../welcome_page_img/ko.svg';
import pl from '../welcome_page_img/polski.svg';
import ro from '../welcome_page_img/rom.svg';
import th from '../welcome_page_img/th.svg';
import uk from '../welcome_page_img/uk.svg';
import zhc from '../welcome_page_img/zh-c.svg';
import cs from '../welcome_page_img/cs.svg';
import el from '../welcome_page_img/el.svg';
import es from '../welcome_page_img/es.svg';
import hi from '../welcome_page_img/hi.svg';
import id from '../welcome_page_img/id.svg';
import ja from '../welcome_page_img/ja.svg';
import nl from '../welcome_page_img/nl.svg';
import pt from '../welcome_page_img/pt.svg';
import ru from '../welcome_page_img/ru.svg';
import tr from '../welcome_page_img/tr.svg';
import vi from '../welcome_page_img/vi.svg';
import row from '../welcome_page_img/row.svg';

/* Useful Component */
import LangComponent from '../LangSlider/langComponent';



const Header = () => {

    return (
        <div className="relative " >
            <nav className="header navbar flex justify-center fixed w-full h-17 bg-[#235390]">
                <div className="container mx-auto  flex justify-between p-1.5 pt-0">
                    <div className='p-2.5 pl-6 pt-5'>
                        <a href="#/">
                            <img className="h-9 " alt="" src={logo} />
                        </a>
                    </div>
                    <div className=" flex p-2.5 pt-3 text-[16px] pb-0.5 text-white font-bold tracking-wider ">
                        <button className="relative group languages pr-6   font-bold  flags-language:hidden" >
                            SITE LANGUAGE: ENGLİSH
                            <div className="flags-Languages flex invisible group-focus:visible group-hover:visible p-4 hover:visible">
                                <ul className='language-list'>

                                    {/* Useful Component */}

                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={ar}
                                        language="العربية"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={german}
                                        language="Deutsch"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={en}
                                        language="English"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={french}
                                        language="Français"
                                    />

                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={magyar}
                                        language="Magyar"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={italiano}
                                        language="Italiano"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={ko}
                                        language="한국어"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={pl}
                                        language="Polski"
                                    />

                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={ro}
                                        language="Română"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={th}
                                        language="ภาษาไทย"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={uk}
                                        language="Українською"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={zhc}
                                        language="中文"
                                    />


                                </ul>
                                <ul className='language-list '>
                                    <img className="up-row" src={row} />


                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={cs}
                                        language="Čeština"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={el}
                                        language="Ελληνικά"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={es}
                                        language="Español"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={hi}
                                        language="हिंदी"
                                    />

                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={id}
                                        language="Bahasa Indonesia"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={ja}
                                        language="日本語"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={nl}
                                        language="Nederlands"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={pt}
                                        language="Português"
                                    />

                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={ru}
                                        language="Русский"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={tr}
                                        language="Türkçe"
                                    />
                                    <LangComponent
                                        linkAdress="#/"
                                        wpHeaderCcn="li"
                                        languageFrag={vi}
                                        language="Tiếng Việt"
                                    />


                                </ul>
                            </div>
                        </button>

                        <a className="get-started px-3 pt-2 pb-4 ml-5 mr-2 shadow rounded-2xl bg-[#58cc02] text-white font-bold" href="#/Learn">
                            GET STARTED
                        </a>
                        <a className="login px-3 pt-2 pb-4 rounded-2xl bg-[#fff] text-[#0b3e71] font-bold" href="#/Learn">
                            LOGİN
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );

}


export default Header;