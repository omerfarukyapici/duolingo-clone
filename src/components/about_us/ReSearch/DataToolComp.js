import './ReSearch.css';

const DataToolComp = ({ title, content, dataLink, icon, iname, icontwo, inametwo, iconCn, dataLinkTwo }) => {
    return (
        <div className="dataToolComp w-auto lg:w-[485px] p-8 m-5 lg:m-4 bg-white ">
            <div className="py-2">
                <a className=" text-[#1cb0f6] text-[1.5rem] font-bold leading-tight hover:text-[#0883be]" href={dataLink}>{title}</a>
            </div>
            <p className="leading-[26px] mb-[1rem]">{content}</p>
            <div className="flex pt-3 pb-2">
                <a href={dataLinkTwo} className="hoverLink flex">
                    <div className="dataİcon mr-2">
                        <img className="w-[1.1rem]" src={icon} alt="" />
                    </div>
                    <span className="mt-1 hoverName font-medium">{iname}</span>
                </a>
                <a href={dataLinkTwo} className="hoverLink flex ml-3">
                    <div className={iconCn}>
                        <img className="w-[1.1rem]" src={icontwo} alt="" />
                    </div>
                    <span className="mt-1 ml-2 hoverName font-medium">{inametwo}</span>
                </a>
            </div>
        </div>
    );
}

export default DataToolComp;