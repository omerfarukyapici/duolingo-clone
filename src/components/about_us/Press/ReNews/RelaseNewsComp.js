const RelaseNewsComp = ({ artDate, artTitle }) => {
    return (
        <div className="border-solid border-b-2 border-[#e5e5e5]" >
            <div className="">
                <p className="text-[#afafaf] text-[17px] font-bold py-[1rem]"> {artDate} </p>
                <div className="pb-[2.2rem]">
                    <a className="leading-[32px] text-[20px] md:text-[22px] font-bold text-[#4b4b4b] " href="#/press">
                        {artTitle}
                    </a>
                </div>
            </div>
        </div>
    );
}
export default RelaseNewsComp;