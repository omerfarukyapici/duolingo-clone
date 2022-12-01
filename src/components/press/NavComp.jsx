import "../../assets/styles/press.css";

export const NavComp = ({ linkName, linkAdress }) => {
    return (
        <div className="NavComp flex  content-center">
            <a className="pt-6" href={linkAdress}>
              <span className="">{linkName}</span>
            </a>
        </div>
    );
}
