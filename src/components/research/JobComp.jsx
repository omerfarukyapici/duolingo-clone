import "../../assets/styles/research.css";

export const JopComp = ({ title, content }) => {
    return (
        <div className="JopComp mb-6">
            <a href="#/research">
                <div className=" bg-white rounded-2xl p-6 leading-[29px]">
                    <h2 className="text-[1.5rem] font-bold text-[#1cb0f6] hover:text-[#0883be]" > {title} </h2>
                    <p className="text-[#4c4c4c] pt-[1rem]"> {content} </p>
                </div>
            </a>
        </div>

    );
}
