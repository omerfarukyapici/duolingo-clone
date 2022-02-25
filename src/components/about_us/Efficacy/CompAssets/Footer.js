import '../EfficacyMain.css';

const Footer = () => {
    return (
        <div className="e-Footer flex justify-center">
            <div className="e-Footer-Container flex justify-center px-2">
                <ul className="flex flex-wrap md:text-center ">
                    <li><a href="#/">DUOLINGO</a></li>
                    <li><a href="#/duoaboutus">ABOUT</a></li>
                    <li><a href="#/career">CAREERS</a>  </li>
                    <li><a href="#/">APPS</a> </li>
                    <li><a href="#/">INVESTORS</a> </li>
                    <li><a href="#/">HELP</a>  </li>
                    <li><a href="#/terms">TERMS</a> </li>
                    <li><a href="#/privacy">PRIVACY</a> </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;