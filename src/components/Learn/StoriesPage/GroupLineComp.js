export const GroupLineComp = ({group}) => {
    return (
        <div className=" w-full text-center py-8">
            <div className="border-t-[3px] border-solid border-[#e5e5e5] mt-5">
                <div className="flex justify-center">
                    <h2 className="relative -top-6 -mb-4 text-[27px] font-bold text-[#4b4b4b] w-[8rem] bg-white">{group}</h2>
                </div>
            </div>
        </div>
    );
}