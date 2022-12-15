import "../../assets/styles/career.css";

export const Button = ({ content, style }) => {
    return (
        <div>
            <a className={style} href="#/career">
                {content}
            </a>
        </div>
    );
}