import "../../assets/styles/research.css";

export const NavComponent = ({ linkName, linkAdress, ncCn }) => {
    return (
        <div className={ncCn}>
            <a className="text-[#1cb0f6] font-medium hover:text-[#3973ac]" href={linkAdress} >{linkName}</a>
        </div>
    );
}
