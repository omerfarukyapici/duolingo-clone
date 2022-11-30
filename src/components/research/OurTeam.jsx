import { TeamComp } from "./TeamComp";

import one from '../../assets/img/research/burr-settles.jpg';
import two from '../../assets/img/research/andre-horie.jpg';
import three from '../../assets/img/research/bozena-pajak.jpg';
import four from '../../assets/img/research/erin-gustafson.jpg';
import five from '../../assets/img/research/chris-brust.jpg';
import six from '../../assets/img/research/cindy-berger.jpg';
import seven from '../../assets/img/research/angela-dicostanzo.jpg';
import eight from '../../assets/img/research/cindy-blanco.jpg';
import nine from '../../assets/img/research/lisa-bromberg.jpg';
import ten from '../../assets/img/research/bill-mcdowell.jpg';
import eleven from '../../assets/img/research/lowell-reade.jpg';
import twelve from '../../assets/img/research/klinton-bicknell.jpg';
import thirteen from '../../assets/img/research/will-monroe.jpg';
import fourteen from '../../assets/img/research/geoff-laflair.jpg';
import fifteen from '../../assets/img/research/hope-wilson.jpg';
import sixteen from '../../assets/img/research/kevin-yancey.jpg';
import seventeen from '../../assets/img/research/xiangying-jiang.jpg';
import eighteen from '../../assets/img/research/jessie-becker.jpg';
import nineteen from '../../assets/img/research/graham-arthur.jpg';
import twenty from '../../assets/img/research/stephen-mayhew.jpg';
import twentyone from '../../assets/img/research/meredith-mcdermott.jpg';
import twentytwo from '../../assets/img/research/andrew-runge.jpg';
import twentythree from '../../assets/img/research/connor-brem.jpg';
import twentyfour from '../../assets/img/research/anna-savage.jpg';
import twentyfive from '../../assets/img/research/emily-moline.jpg';
import twentysix from '../../assets/img/research/ben-collier.jpg';
import twentyseven from '../../assets/img/research/elizabeth-strong.jpg';
import twentyeight from '../../assets/img/research/cory-wheeler.jpg';
import twentynine from '../../assets/img/research/lauren-bilsky.jpg';
import thirty from '../../assets/img/research/emma-gibson.jpg';
import thirtyone from '../../assets/img/research/james-leow.jpg';
import thirtytwo from '../../assets/img/research/danchen-yang.jpg';
import thirtythree from '../../assets/img/research/isabel-deibel.jpg';
import thirtyfour from '../../assets/img/research/elizabeth-onstwedder.jpg';
import thirtyfive from '../../assets/img/research/kevin-lenzo.jpg';
import thirtysix from '../../assets/img/research/mancy-liao.jpg';
import thirtyseven from '../../assets/img/research/nora-gordon.jpg';
import thirtyeight from '../../assets/img/research/sharon-wilkinson.jpg';
import thirtynine from '../../assets/img/research/naveen-shankar.jpg';
import forty from '../../assets/img/research/antony-kunnan.jpg';
import fortyone from '../../assets/img/research/jackie-bialostozky.jpg';
import fortytwo from '../../assets/img/research/lucy-portnoff.jpg';
import fortythree from '../../assets/img/research/ramsey-cardwell.jpg';
import fortyfour from '../../assets/img/research/alina-vondavier.jpg';
import fortyfive from '../../assets/img/research/hannah-pileggi.jpg';
import fortysix from '../../assets/img/research/yigal-attali.jpg';
import fortyseven from '../../assets/img/research/audrey-kittredge.jpg';
import fortyeight from '../../assets/img/research/ben-reuveni.jpg';
import fortynine from '../../assets/img/research/jr-lockwood.jpg';
import fifty from '../../assets/img/research/rich-forest.jpg';
import fiftyone from '../../assets/img/research/mark-lock.jpg';
import fiftytwo from '../../assets/img/research/lisa-frumkes.jpg';
import fiftythree from '../../assets/img/research/will-belzak.jpg';


export const OurTeam = () => {
    return (
        <section className="flex justify-center pb-[5rem]">
            <div className="w-auto lg:w-[1030px] px-auto lg:px-[2rem] ">


                <div className=" w-auto lg:w-[990px] px-6 lg:px-[2rem] block lg:flex justify-between py-[3.5rem]">
                    <h1 className="leading-[71px] text-[2rem] lg:text-[3.25rem] font-bold text-[#4c4c4c] pb-[1rem]">Our Team</h1>
                    <p className="w-auto lg:w-[492px] text-[#4c4c4c] text-[1.0625rem] leading-[26px]">
                        We are a diverse team of experts in AI and machine learning, data science, learning sciences,
                        UX research, linguistics, and psychometrics. We work closely with product teams to build innovative
                        features based on world-class research. We are growing, so check out our <a className="text-[#1cb0f6] hover:text-[#0883be]" href="#/research">job openings below</a>!
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="inline-grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5">

                        {/* Useful Components */}

                        <TeamComp
                            timg={one}
                            tname="Burr Settles"
                            posit="AI + Machine Learning"
                        />
                        <TeamComp
                            timg={two}
                            tname="André Horie"
                            posit="AI + Machine Learning"
                        />
                        <TeamComp
                            timg={three}
                            tname="Bożena Pająk"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={four}
                            tname="Erin Gustafson"
                            posit="Data Science + Analytics"
                        />
                        <TeamComp
                            timg={five}
                            tname="Chris Brust"
                            posit="AI + Machine Learning"
                        />
                        <TeamComp
                            timg={six}
                            tname="Cindy Berger"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={seven}
                            tname="Angela DiCostanzo"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={eight}
                            tname="Cindy Blanco"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={nine}
                            tname="Lisa Bromberg"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={ten}
                            tname="Bill McDowell"
                            posit="AI + Machine Learning"
                        />
                        <TeamComp
                            timg={eleven}
                            tname="Lowell Reade"
                            posit="UX Research"
                        />
                        <TeamComp
                            timg={twelve}
                            tname="Klinton Bicknell"
                            posit="AI + Machine Learning"
                        />
                        <TeamComp
                            timg={thirteen}
                            tname="Will Monroe"
                            posit="AI + Machine Learning"
                        />
                        <TeamComp
                            timg={fourteen}
                            tname="Geoff LaFlair"
                            posit="Assessment + Psychometrics"
                        />
                        <TeamComp
                            timg={fifteen}
                            tname="Hope Wilson"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={sixteen}
                            tname="Kevin Yancey"
                            posit="AI + Machine Learning"
                        />
                        <TeamComp
                            timg={seventeen}
                            tname="Xiangying Jiang"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={eighteen}
                            tname="Jessica Becker"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={nineteen}
                            tname="Graham Arthur"
                            posit="Data Science + Analytics"
                        />
                        <TeamComp
                            timg={twenty}
                            tname="Stephen Mayhew"
                            posit="AI + Machine Learning"
                        />
                        <TeamComp
                            timg={twentyone}
                            tname="Meredith McDermott"
                            posit="UX Research"
                        />
                        <TeamComp
                            timg={twentytwo}
                            tname="Andrew Runge"
                            posit="AI + Machine Learning"
                        />
                        <TeamComp
                            timg={twentythree}
                            tname="Connor Brem"
                            posit="AI + Machine Learning"
                        />
                        <TeamComp
                            timg={twentyfour}
                            tname="Anna Savage"
                            posit="UX Research"
                        />
                        <TeamComp
                            timg={twentyfive}
                            tname="Emily Moline"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={twentysix}
                            tname="Ben Collier"
                            posit="Data Science + Analytics"
                        />
                        <TeamComp
                            timg={twentyseven}
                            tname="Elizabeth Strong"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={twentyeight}
                            tname="Cory Wheeler"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={twentynine}
                            tname="Lauren Bilsky"
                            posit="AI + Machine Learning"
                        />
                        <TeamComp
                            timg={thirty}
                            tname="Emma Gibson"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={thirtyone}
                            tname="James Leow"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={thirtytwo}
                            tname="Danchen Yang"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={thirtythree}
                            tname="Isabel Deibel"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={thirtyfour}
                            tname="Elizabeth Onstwedder"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={thirtyfive}
                            tname="Kevin Lenzo"
                            posit="AI + Machine Learning"
                        />
                        <TeamComp
                            timg={thirtysix}
                            tname="Mancy Liao"
                            posit="Assessment + Psychometrics"
                        />
                        <TeamComp
                            timg={thirtyseven}
                            tname="Nora Gordon"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={thirtyeight}
                            tname="Sharon Wilkinson"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={thirtynine}
                            tname="Naveen Shankar"
                            posit="Data Science + Analytics"
                        />
                        <TeamComp
                            timg={forty}
                            tname="Antony Kunnan"
                            posit="Assessment + Psychometrics"
                        />
                        <TeamComp
                            timg={fortyone}
                            tname="Jackie Bialostozky"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={fortytwo}
                            tname="Lucy Portnoff"
                            posit="Data Science + Analytics"
                        />
                        <TeamComp
                            timg={fortythree}
                            tname="Ramsey Cardwell"
                            posit="Assessment + Psychometrics"
                        />
                        <TeamComp
                            timg={fortyfour}
                            tname="Alina von Davier"
                            posit="Assessment + Psychometrics"
                        />
                        <TeamComp
                            timg={fortyfive}
                            tname="Hannah Pileggi"
                            posit="UX Research"
                        />
                        <TeamComp
                            timg={fortysix}
                            tname="Yigal Attali"
                            posit="Assessment + Psychometrics"
                        />
                        <TeamComp
                            timg={fortyseven}
                            tname="Audrey Kittredge"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={fortyeight}
                            tname="Ben Reuveni"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={fortynine}
                            tname="J.R. Lockwood"
                            posit="Assessment + Psychometrics"
                        />
                        <TeamComp
                            timg={fifty}
                            tname="Rich Forest"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={fiftyone}
                            tname="Mark Lock"
                            posit="Data Science + Analytics"
                        />
                        <TeamComp
                            timg={fiftytwo}
                            tname="Lisa Frumkes"
                            posit="Learning + Curriculum"
                        />
                        <TeamComp
                            timg={fiftythree}
                            tname="Will Belzak"
                            posit="Assessment + Psychometrics"
                        />





                    </div>
                </div>


            </div>
        </section>
    );
}
