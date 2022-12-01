import { RelaseNewsComp } from "./RelaseNewsComp";

export const News = () => {
    return (
        <div className="flex justify-center pb-[4rem]" >
            <div className="w-[1000px] px-4 lg:px-[4rem]">
                <h2 className="text-[#58cc02] text-[40px] lg:text-[54px]  leading-1.1 font-bold pb-2">duolingo in the news</h2>
                <RelaseNewsComp
                    artDate="JAN 5, 2022"
                    artTitle="The Independent - How Duolingo became the most popular language app in the world"
                />
                <RelaseNewsComp
                    artDate="DEC 13, 2021"
                    artTitle="Business Insider - Duolingo is hiring across all of its teams. The company's global head of talent says it looks for 2 traits in all candidates."
                />
                <RelaseNewsComp
                    artDate="DEC 6, 2021"
                    artTitle="The Verge - Duolingo interprets 2021, with TikTok and Squid Game inspiring users to learn new languages"
                />
                <RelaseNewsComp
                    artDate="NOV 4, 2021"
                    artTitle="NBC News - How Duo the big green owl became a TikTok star"
                />
                <RelaseNewsComp
                    artDate="NOV 1, 2021"
                    artTitle="NY Daily News - ‘Squid Game’ mania leads to spike in interest in learning Korean"
                />
                <RelaseNewsComp
                    artDate="OCT 5, 2021"
                    artTitle="CNBC - How Luis von Ahn created Duolingo and what makes him proudest about the app"
                />
                <RelaseNewsComp
                    artDate="AUG 20, 2021"
                    artTitle="Fast Company - Duolingo wants to be the ‘Sesame Street’ for adults"
                />
                <RelaseNewsComp
                    artDate="JUL 28, 2021"
                    artTitle="Reuters - Duolingo enters 'major leagues' with $6.5 bln valuation in strong debut"
                />
                <RelaseNewsComp
                    artDate="APR 26, 2021"
                    artTitle="TIME - Duolingo Named to TIME’s 100 Most Influential Companies List"
                />
            </div>
        </div>
    );
}
