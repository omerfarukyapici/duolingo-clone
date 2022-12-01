export const ProductComp = ({ img, title, content, linkAdress, linkName }) => {
    return (
        <div className="w-auto md:w-[250px] text-center pb-[3rem]">
            <div className="flex justify-center">
                <img className="w-[110px]" alt="" src={img} />
            </div>
            <h2 className="text-[22px] leading-1.48 font-bold text-[#4b4b4b] pt-[1.3rem]">{title} </h2>
            <p className="text-[#777] text-[19px] leading-1.3 pt-[.5rem]" > {content} </p>
            <div className="mt-[1rem]">
                <a className="text-[#1cb0f6] font-bold hover:text-[#53bef0] " href={linkAdress}> {linkName} </a>
            </div>
        </div>
    );
}
