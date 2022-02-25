import '../CoursesMain.css';

const Footer = () => {
    return (
        <div className='c-Footer flex justify-center'>
            <div className="c-Footer-Container flex justify-center pt-10 pb-12">
                <ul className="flex wrap ">
                    <li>
                        <a href="#/duoaboutus">ABOUT</a>
                    </li>
                    <li>
                        <a href="#/">BLOG</a>
                    </li>
                    <li>
                        <a href="#/duoforschool">SCHOOLS</a>
                    </li>
                    <li>
                        <a href="#/">APPS</a>
                    </li>
                    <li>
                        <a href="#/efficacy">EFFICACY</a>
                    </li>
                    <li>
                        <a href="#/">HELP</a>
                    </li>
                    <li>
                        <a href="#/communityguide">GUIDELINES</a>
                    </li>
                    <li>
                        <a href="#/career">CAREERS</a>
                    </li>
                    <li>
                        <a href="#/">INVESTORS</a>
                    </li>
                    <li>
                        <a href="#/terms">TERMS</a>
                    </li>
                    <li>
                        <a href="#/privacy">PRIVACY</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;