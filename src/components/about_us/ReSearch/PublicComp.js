import './ReSearch.css';

const PublicComp = ({ imgLink, linkAdress, linkName, names, aDate }) => {
    return (
        <div className="px-0 lg:px-[5rem] block lg:flex justify-between">
            <div className="PublicİmgHover hidden lg:flex border-solid border-[#d9d9d9] border-[1px] rounded-2xl justify-center">
                <a href="#/research" >
                    <img className="p-[0.25rem] w-[10rem] h-[8rem]" alt=""  src={imgLink} />
                </a>
            </div>
            <div className="pl-0 lg:pl-[3rem] w-auto lg:w-[770px]">
                <a className="text-[#1cb0f6] leading-8 hover:text-[#0883be] text-[1.5rem] font-bold " href={linkAdress}>{linkName}</a>
                <p className="font-bold text-[#4c4c4c] text-[1.0625rem] leading-normal pt-3">{names}</p>
                <p className="text-[#777] text-[1.0625rem] leading-normal">{aDate}</p>
            </div>
        </div>
    );
}

export default PublicComp;