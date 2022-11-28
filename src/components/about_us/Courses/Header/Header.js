import '../CoursesMain.css';

import "../../../../assets/styles/welcome.css";

import logo from "../../../../assets/img/welcome/w_p_logo.svg";

import ar from '../../../../assets/img/welcome/arabic.svg';
import german from '../../../../assets/img/welcome/german.svg';
import en from '../../../../assets/img/welcome/america.svg';
import french from '../../../../assets/img/welcome/french.svg';
import magyar from '../../../../assets/img/welcome/magyar.svg';
import italiano from '../../../../assets/img/welcome/italiano.svg';
import ko from '../../../../assets/img/welcome/ko.svg';
import pl from '../../../../assets/img/welcome/polski.svg';
import ro from '../../../../assets/img/welcome/rom.svg';
import th from '../../../../assets/img/welcome/th.svg';
import uk from '../../../../assets/img/welcome/uk.svg';
import zhc from '../../../../assets/img/welcome/zh-c.svg';
import cs from '../../../../assets/img/welcome/cs.svg';
import el from '../../../../assets/img/welcome/el.svg';
import es from '../../../../assets/img/welcome/es.svg';
import hi from '../../../../assets/img/welcome/hi.svg';
import id from '../../../../assets/img/welcome/id.svg';
import ja from '../../../../assets/img/welcome/ja.svg';
import nl from '../../../../assets/img/welcome/nl.svg';
import pt from '../../../../assets/img/welcome/pt.svg';
import ru from '../../../../assets/img/welcome/ru.svg';
import tr from '../../../../assets/img/welcome/tr.svg';
import vi from '../../../../assets/img/welcome/vi.svg';
import row from '../../../../assets/img/welcome/row.svg';

import humburgerMenu from '../../About_Us_İmg/hamburger-menu.svg';

import LangComponent from '../../../welcome/langComponent';



const Header = () => {

    const showHide = () => {
        let links = document.querySelector(".c-humburger-links");

        if (links.style.display === "block") {
            links.style.display = "none";
        } else {
            links.style.display = "block";
        }
    }

    return (
        <div className="relative " >
            <nav className="header navbar flex justify-center fixed w-full h-17 bg-[#1cb0f6]">
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
                                        wpHeaderCcn="li"
                                        languageFrag={ar}
                                        language="العربية"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={german}
                                        language="Deutsch"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={en}
                                        language="English"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={french}
                                        language="Français"
                                    />

                                    






                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={magyar}
                                        language="Magyar"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={italiano}
                                        language="Italiano"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={ko}
                                        language="한국어"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={pl}
                                        language="Polski"
                                    />



                                    




                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={ro}
                                        language="Română"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={th}
                                        language="ภาษาไทย"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={uk}
                                        language="Українською"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={zhc}
                                        language="中文"
                                    />



                                    







                                </ul>
                                <ul className='language-list '>
                                    <img className="up-row" alt="" src={row} />


                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={cs}
                                        language="Čeština"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={el}
                                        language="Ελληνικά"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={es}
                                        language="Español"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={hi}
                                        language="हिंदी"
                                    />





                                    



                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={id}
                                        language="Bahasa Indonesia"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={ja}
                                        language="日本語"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={nl}
                                        language="Nederlands"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={pt}
                                        language="Português"
                                    />




                                    


                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={ru}
                                        language="Русский"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={tr}
                                        language="Türkçe"
                                    />
                                    <LangComponent
                                        wpHeaderCcn="li"
                                        languageFrag={vi}
                                        language="Tiếng Việt"
                                    />





                                    

                                </ul>
                            </div>
                        </button>

                        <a className="courses-Header login px-3 pt-2.5 pb-4 ml-5 rounded-2xl bg-[#fff] text-[#0b3e71] font-bold" href="#/Learn">
                            LOGIN
                        </a>
                        <a className="courses-Header get-started px-3 pt-2.5 pb-4 ml-5 mr-2 shadow rounded-2xl bg-[#58cc02] text-white font-bold" href="#/Learn">
                            GET STARTED
                        </a>

                        <button className="c-humburger-button" onClick={showHide} >
                            <img src={humburgerMenu} alt="" />
                            <div className="c-humburger-links">
                                <div className="pt-3 pb-3 c-border-t" >
                                    <a href="#/Learn" >Sign in</a>
                                </div>
                                <div className="pt-3 pb-3 c-border-t">
                                    <a href="#/Learn" >Get started</a>
                                </div>
                                <div className="pt-3 pb-3 c-border-t">
                                    <a href="#/coursemain" >Site language: English</a>
                                </div>
                            </div>
                        </button>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;