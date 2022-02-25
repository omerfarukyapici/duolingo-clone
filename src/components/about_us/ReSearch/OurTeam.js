import TeamComp from "./teamComp";

/* Team */
import one from './ReSearchİmg/burr-settles.jpg';
import two from './ReSearchİmg/andre-horie.jpg';
import three from './ReSearchİmg/bozena-pajak.jpg';
import four from './ReSearchİmg/erin-gustafson.jpg';
import five from './ReSearchİmg/chris-brust.jpg';
import six from './ReSearchİmg/cindy-berger.jpg';



import seven from './ReSearchİmg/angela-dicostanzo.jpg';
import eight from './ReSearchİmg/cindy-blanco.jpg';
import nine from './ReSearchİmg/lisa-bromberg.jpg';
import ten from './ReSearchİmg/bill-mcdowell.jpg';
import eleven from './ReSearchİmg/lowell-reade.jpg';
import twelve from './ReSearchİmg/klinton-bicknell.jpg';




import thirteen from './ReSearchİmg/will-monroe.jpg';
import fourteen from './ReSearchİmg/geoff-laflair.jpg';
import fifteen from './ReSearchİmg/hope-wilson.jpg';
import sixteen from './ReSearchİmg/kevin-yancey.jpg';
import seventeen from './ReSearchİmg/xiangying-jiang.jpg';
import eighteen from './ReSearchİmg/jessie-becker.jpg';



import nineteen from './ReSearchİmg/graham-arthur.jpg';
import twenty from './ReSearchİmg/stephen-mayhew.jpg';
import twentyone from './ReSearchİmg/meredith-mcdermott.jpg';
import twentytwo from './ReSearchİmg/andrew-runge.jpg';
import twentythree from './ReSearchİmg/connor-brem.jpg';
import twentyfour from './ReSearchİmg/anna-savage.jpg';



import twentyfive from './ReSearchİmg/emily-moline.jpg';
import twentysix from './ReSearchİmg/ben-collier.jpg';
import twentyseven from './ReSearchİmg/elizabeth-strong.jpg';
import twentyeight from './ReSearchİmg/cory-wheeler.jpg';
import twentynine from './ReSearchİmg/lauren-bilsky.jpg';
import thirty from './ReSearchİmg/emma-gibson.jpg';




import thirtyone from './ReSearchİmg/james-leow.jpg';
import thirtytwo from './ReSearchİmg/danchen-yang.jpg';
import thirtythree from './ReSearchİmg/isabel-deibel.jpg';
import thirtyfour from './ReSearchİmg/elizabeth-onstwedder.jpg';
import thirtyfive from './ReSearchİmg/kevin-lenzo.jpg';
import thirtysix from './ReSearchİmg/mancy-liao.jpg';




import thirtyseven from './ReSearchİmg/nora-gordon.jpg';
import thirtyeight from './ReSearchİmg/sharon-wilkinson.jpg';
import thirtynine from './ReSearchİmg/naveen-shankar.jpg';
import forty from './ReSearchİmg/antony-kunnan.jpg';
import fortyone from './ReSearchİmg/jackie-bialostozky.jpg';
import fortytwo from './ReSearchİmg/lucy-portnoff.jpg';



import fortythree from './ReSearchİmg/ramsey-cardwell.jpg';
import fortyfour from './ReSearchİmg/alina-vondavier.jpg';
import fortyfive from './ReSearchİmg/hannah-pileggi.jpg';
import fortysix from './ReSearchİmg/yigal-attali.jpg';
import fortyseven from './ReSearchİmg/audrey-kittredge.jpg';
import fortyeight from './ReSearchİmg/ben-reuveni.jpg';




import fortynine from './ReSearchİmg/jr-lockwood.jpg';
import fifty from './ReSearchİmg/rich-forest.jpg';
import fiftyone from './ReSearchİmg/mark-lock.jpg';
import fiftytwo from './ReSearchİmg/lisa-frumkes.jpg';
import fiftythree from './ReSearchİmg/will-belzak.jpg';


const OurTeam = () => {
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

export default OurTeam;