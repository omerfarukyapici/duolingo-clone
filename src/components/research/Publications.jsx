import {PublicComp} from "./PublicComp";
import PubOne from '../../assets/img/research/publication-1.png';
import PubTwo from '../../assets/img/research/publication-2.png';
import PubThree from '../../assets/img/research/publication-3.png';
import PubFour from '../../assets/img/research/publication-4.png';
import PubFive from '../../assets/img/research/publication-5.png';
import PubSix from '../../assets/img/research/publication-6.png';
import PubSeven from '../../assets/img/research/publication-7.png';
import PubEight from '../../assets/img/research/publication-8.png';
import PubNine from '../../assets/img/research/publication-9.png';
import PubTen from '../../assets/img/research/publication-10.png';
import PubEleven from '../../assets/img/research/publication-11.png';
import PubTwelve from '../../assets/img/research/publication-12.png';
import PubThirteen from '../../assets/img/research/publication-13.png';
import PubFourteen from '../../assets/img/research/publication-14.png';
import PubFifteen from '../../assets/img/research/publication-15.png';
import PubSixteen from '../../assets/img/research/publication-16.png';
import PubSeventeen from '../../assets/img/research/publication-17.png';
import PubEighteen from '../../assets/img/research/publication-18.png';
import PubNineteen from '../../assets/img/research/publication-19.png';
import PubTwenty from '../../assets/img/research/publication-20.png';
import PubTwentyOne from '../../assets/img/research/publication-21.png';

export const Publications = () => {
    return (
        <section className="pt-[4rem] pb-[3rem] px-6">
            <div className=" flex justify-left lg:justify-center">
                <h1 className=" w-auto lg:w-[940px] leading-[71px] text-[2.5rem] lg:text-[3.2rem] font-bold text-[#4c4c4c]" >Publications</h1>
            </div>

            <div className=" flex justify-center py-[2rem] lg:py-[5rem]" >
                <div>
                    <PublicComp
                        imgLink={PubOne}
                        linkAdress="#/research"
                        linkName="Jump-Starting Item Parameters for Adaptive Language Tests"
                        names="A.D. McCarthy, K.P. Yancey, G.T. LaFlair, J. Egbert, M. Liao, and B. Settles"
                        aDate="EMNLP Proceedings, 2021"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>

                    <PublicComp
                        imgLink={PubTwo}
                        linkAdress="#/research"
                        linkName="Mining Process Data to Detect Aberrant Test Takers"
                        names="M. Liao, J. Patton, R. Yan, and H. Jiao"
                        aDate="Measurement: Interdisciplinary Research and Perspectives, 2021"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubThree}
                        linkAdress="#/research"
                        linkName="Methods for Language Learning Assessment at Scale: Duolingo Case Study"
                        names="L. Portnoff, E. Gustafson, J. Rollinson and K. Bicknell"
                        aDate="EDM Proceedings, 2021"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubFour}
                        linkAdress="#/research"
                        linkName="A Sleeping, Recovering Bandit Algorithm for Optimizing Recurring Notifications"
                        names="K.P. Yancey and B. Settles"
                        aDate="KDD Proceedings, 2020"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubFive}
                        linkAdress="#/research"
                        linkName="Exploring Neural Entity Representations for Semantic Information"
                        names="A. Runge and E. Hovy"
                        aDate="EMNLP Proceedings, 2020"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubSix}
                        linkAdress="#/research"
                        linkName="Simultaneous Translation and Paraphrase for Language Education"
                        names="S. Mayhew, K. Bicknell, C. Brust, B. McDowell, W. Monroe, and B. Settles"
                        aDate="ACL Proceedings, 2020 • Duolingo Shared Task"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubSeven}
                        linkAdress="#/research"
                        linkName="Indigenous Language Teaching Policy in California/the U.S.: What’s Left Unsaid in Discourse/Funding"
                        names="E.A. Moline"
                        aDate="Issues in Applied Linguistics, 2020"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubEight}
                        linkAdress="#/research"
                        linkName="Predictors Of Second Language English Lexical Recognition: Further Insights From A Large Database Of Second Language Lexical Decision Times"
                        names="S. Skalicky, S.A. Crossley, and C.M. Berger"
                        aDate="The Mental Lexicon, 2020"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubNine}
                        linkAdress="#/research"
                        linkName="Ongoing Cognitive Processing Influences Precise Eye-Movement Targets in Reading"
                        names="K. Bicknell, R. Levy, and K. Rayner"
                        aDate="Psychological Science, 2020"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubTen}
                        linkAdress="#/research"
                        linkName="Machine Learning Driven Language Assessment"
                        names="B. Settles, G.T. LaFlair, and M. Hagiwara"
                        aDate="Transactions of the Association for Computational Linguistics, 2020"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubEleven}
                        linkAdress="#/research"
                        linkName="Using LSTMs to Assess the Obligatoriness of Phonological Distinctive Features for Phonotactic Learning"
                        names="N. Mirea and K. Bicknell"
                        aDate="ACL Proceedings, 2019"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubTwelve}
                        linkAdress="#/research"
                        linkName="Learning from Omission"
                        names="B. McDowell and N. Goodman"
                        aDate="ACL Proceedings, 2019
                        "
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubThirteen}
                        linkAdress="#/research"
                        linkName="A Rational Model of Word Skipping in Reading: Ideal Integration of Visual and Linguistic Information"
                        names="Y. Duan and K. Bicknell"
                        aDate="CogSci Proceedings, 2019"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubFourteen}
                        linkAdress="#/research"
                        linkName="Observing the Emergence of Constructional Knowledge: Verb Patterns in German and Spanish Learners of English at Different Proficiency Levels"
                        names="U. Römer and C.M. Berger"
                        aDate="Studies in Second Language Acquisition, 2019"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubFifteen}
                        linkAdress="#/research"
                        linkName="Influence of Speaking Style Adaptations and Semantic Context on the Time Course of Word Recognition in Quiet and in Noise"
                        names="S.V.H. van der Feest, C.P. Blanco, and R. Smiljanica"
                        aDate="Journal of Phonetics, 2019"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubSixteen}
                        linkAdress="#/research"
                        linkName="Second Language Acquisition Modeling"
                        names="B. Settles, C. Brust, E. Gustafson, M. Hagiwara and N. Madnani"
                        aDate="NAACL-HLT Proceedings, 2018 • Duolingo Shared Task"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubSeventeen}
                        linkAdress="#/research"
                        linkName="Learning Additional Languages As Hierarchical Probabilistic Inference: Insights from First Language Processing"
                        names="B. Pajak, A.B. Fine, D.F. Kleinschmidt, and T.F. Jaeger"
                        aDate="Language Learning, 2016"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubEighteen}
                        linkAdress="#/research"
                        linkName="A Trainable Spaced Repetition Model for Language Learning"
                        names="B. Settles and B. Meeder"
                        aDate="ACL Proceedings, 2016"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubNineteen}
                        linkAdress="#/research"
                        linkName="Difficulty in Learning Similar-Sounding Words: A Developmental Stage or a General Property of Learning?"
                        names="B. Pajak, S.C. Creel, and R. Levy"
                        aDate="Journal of Experimental Psychology, 2016"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubTwenty}
                        linkAdress="#/research"
                        linkName="Self-directed Learning Favors Local, Rather Than Global, Uncertainty"
                        names="D.B. Markant, B. Settles, and T.M. Gureckis"
                        aDate="Cognitive Science, 2016"
                    />
                    <div className="pl-auto lg:pl-20 py-6">
                        <hr className=" w-auto lg:w-[900px]"></hr>
                    </div>
                    <PublicComp
                        imgLink={PubTwentyOne}
                        linkAdress="#/research"
                        linkName="Mixture Modeling of Individual Learning Curves"
                        names="M. Streeter"
                        aDate="EDM Proceedings, 2015 • Best Paper Award"
                    />

                </div>

            </div>

        </section>
    );
}