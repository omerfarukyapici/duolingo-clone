export const Footer = ({
    footerStyle
}) => {
    return (
        <div className={footerStyle}>
            <ul className="LearnFooter flex justify-center flex-wrap">
                <li><a href="#/duoaboutus">ABOUT</a></li>
                <li><a href="#/">BLOG</a></li>
                <li><a href="#/duoforschool">SCHOOLS</a></li>
                <li><a href="#/">APPS</a></li>
                <li><a href="#/efficacy">EFFICACY</a></li>
                <li><a href="#/">HELP</a></li>
                <li><a href="#/communityguide">GUIDELINES</a></li>
                <li><a href="#/career">CAREERS</a></li>
                <li><a href="#/">INVESTORS</a></li>
                <li><a href="#/terms">TERMS</a></li>
                <li><a href="#/privacy">PRIVACY</a></li>
            </ul>
        </div>
    );
}