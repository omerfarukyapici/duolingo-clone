import '../../../welcome_page/Header/Header.css';

import logo from '../img/logo.svg';

const Header = () => {

    return (
        <div className="relative " >
            <nav className="header navbar flex justify-center fixed w-auto right-0 left-0 h-17 bg-white">
                <div className="container mx-auto  flex justify-between p-1.5 pt-0">
                    <div className='p-2.5 pl-6 pt-5'>
                        <a href="#/">
                            <img className="h-9 f-down-logo w-[128px]" alt="" src={logo} />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;