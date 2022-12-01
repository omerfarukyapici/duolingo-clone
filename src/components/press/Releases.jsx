import { RelaseNewsComp } from "./RelaseNewsComp";

export const Releases = () => {
    return (
        <div className="flex justify-center py-[4rem]" >
            <div className="w-[1000px] px-4 lg:px-[4rem]">
                <h2 className="text-[#58cc02] text-[40px] lg:text-[54px]  leading-1.1 font-bold pb-2">recent press releases</h2>
                <RelaseNewsComp
                    artDate="JAN 12, 2022"
                    artTitle="Leading Language Research Journal Publishes Study Showing Duolingo Learning Outcomes Are Comparable to University Classes"
                />
                <RelaseNewsComp
                    artDate="DEC 14, 2021"
                    artTitle="Consumer Tech Veteran John Lilly Joins Duolingo Board of Directors"
                />
                <RelaseNewsComp
                    artDate="DEC 6, 2021"
                    artTitle="Duolingo Reveals the “Most 2021 Phrase” and Launches Second Global Language Report"
                />
                <RelaseNewsComp
                    artDate="NOV 18, 2021"
                    artTitle="Duolingo Appoints Dr. Kendra Ross as Head of Social Impact"
                />
                <RelaseNewsComp
                    artDate="NOV 10, 2021"
                    artTitle="Duolingo Announces Third Quarter 2021 Results"
                />
                <RelaseNewsComp
                    artDate="OCT 20, 2021"
                    artTitle="Veteran Animation Executive Linda Simensky Joins Duolingo"
                />
                <RelaseNewsComp
                    artDate="AUG 11, 2021"
                    artTitle="Duolingo Announces Second Quarter 2021 Results"
                />
                <RelaseNewsComp
                    artDate="JUN 28, 2021"
                    artTitle="Duolingo Files Registration Statement for Proposed Initial Public Offering"
                />
            </div>
        </div>
    );
}
