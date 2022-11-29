import { LearnButtonComp } from "./LearnButtonComp";

export const LeagueCompTwo = () => {
    return (
        <div className='bg-white m-2 p-6 rounded-[1rem] border-[2px] border-solid border-[#d6d8da]'>
            <div className="flex justify-between">
                <h2 className="text-[#3c3c3c] text-[24px] leading-[26px] font-bold">Create a profile to save your progress!</h2>
            </div>
            <div className=" pt-10">
                <LearnButtonComp
                    btnDivClass={"w-full text-center font-bold "}
                    btnClass={"learnBtnStyleOne text-white bg-[#58cc02] px-[5.3rem] py-2.5 rounded-xl LeagueCompButtonOne"}
                    btnTitle={"CREATE A PROFİLE"}
                    btnAddress={"#/learn"}
                />
            </div>
            <div className=" pt-7 pb-3">
                <LearnButtonComp
                    btnDivClass={"w-full text-center font-bold "}
                    btnClass={"learnBtnStyleOne text-white bg-[#1cb0f6] px-[7.7rem] py-2.5 rounded-xl LeagueCompButtonTwo"}
                    btnTitle={"SİNG İN"}
                    btnAddress={"#/learn"}
                />
            </div>
        </div>
    );
}
