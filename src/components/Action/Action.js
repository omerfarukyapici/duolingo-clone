import { useState } from "react";
import './Action.css';

/* Avatars */
import girl from './Actionİmg/girl.svg'
import girlTwo from './Actionİmg/girlTwo.svg'
import grandma from './Actionİmg/grandma.svg'
import bear from './Actionİmg/bear.svg'

/* Flag and Comment */
import redFlag from './Actionİmg/redFlag.svg';
import redComment from './Actionİmg/redComment.svg';
import greenFlag from './Actionİmg/greenFlag.svg';
import greenComment from './Actionİmg/greenComment.svg';

/* Right Wrong İcons */
import plus from './Actionİmg/plus.svg';
import ok from './Actionİmg/ok.svg';


const Action = () => {
    window.scrollTo( window.x === 0, window.y === 0);


    /* Header data */
    const [cnumber, setCnumber] = useState(0);

    const line = {
        backgroundColor: "#58cc02",
        width: cnumber + "px",
        height: "16px",
        display: "block",
        borderTop: "6px solid #79d635",
        position: "relative"
    }

    const lineWidthNumber = 960;
    const oneClickLineWidth = 96;

    const lineParent = {
        backgroundColor: "#e5e5e5",
        display: "block",
        height: "16px",
        width: lineWidthNumber + "px",
        borderRadius: "2rem",

    }

    /* Content data */
    const mission = {
        one: "Write This With English",
        two: "Write This With Turkish"
    }

    const missionAvatar = [girl, girlTwo, bear, grandma];
    let avatar = missionAvatar[0];

    const missionSentence = {
        turkish: [
            "One man, one woman.",
            "O bir elma yer"
        ],
        english: [
            "One man, one woman."
        ]
    }
    const placeHolder = {
        one: "One man, one woman."
    }


    /* Footer data */
    const checkButtonOne = {
        backgroundColor: "",
        color: "",
        borderColor: ""
    }
    const checkButtonTwo = {
        backgroundColor: "",
        color: "",
        borderColor: ""
    }
    const ActionFooter = {
        backgroundColor: "",
        borderColor: ""
    }
    const answer = missionSentence.english[0];

    const flagComment = {
        redFlag: redFlag,
        greenFlag: greenFlag,
        redComment: redComment,
        greenComment: greenComment
    }



    /* !! Calculate !! */

    /* İnput */
    const [name, setName] = useState("");
    /* Right answer */
    let expectation = missionSentence.english[0];


    const lineİncrement = () => {
        setCnumber(cnumber + oneClickLineWidth);
    }
    const lineDecrement = () => {
        setCnumber(cnumber - oneClickLineWidth);
    }


    const calculateTheAnswer = () => {
        if (name === expectation) {
            console.log("Right");
        } else {
            console.log("Wrong");
        }
    }



    console.log(cnumber)
    console.log(name)



    return (
        <div>
            <div className="ActionPage flex justify-center">
                <div className="w-[1100px]">

                    <div className="flex justify-center pt-10">


                        <div className="flex" >
                            {/* Header */}
                            <div className="pr-4">
                                <a className="ExitTheActionButton" href="#/learn">  </a>
                            </div>


                            <div className="rounded-[2rem] " style={lineParent}>
                                <div className="lineAnimation bg-[#58cc02] rounded-[2rem]" style={line} >
                                    <p /* className="border-t-[4px] border-solid border-[red]" */ className="ml-2" ></p>
                                </div>
                            </div>



                            {/* Header */}
                        </div>


                    </div>



                    {/* Content */}

                    <div className="flex justify-center">
                        <div className="contentPart w-[600px]" >
                            <p className=" text-[28px] leading-[40px] text-[#3c3c3c] font-bold"> {mission.one} </p>
                            <div className="flex">
                                <div className="pl-2">
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="flex mb-9 pt-20">
                                    <div className="relative left-2 top-5 bg-white border-t-[2px] border-l-[2px] border-solid  w-4 h-4 block border-solid border-[#e5e5e5] -rotate-45"></div>
                                    <div className="text-[19px] text-[#3c3c3c] p-3 rounded-[.7rem]  bg-white border-[2px] border-solid border-[#e5e5e5]">
                                        {missionSentence.turkish[0]}
                                    </div>
                                </div>
                            </div>
                            <form >
                                <textarea value={name} onChange={e => setName(e.target.value)} typeof="text" className="text-[#3c3c3c] text-[18px] textArea bg-[#F7F7F7] w-full h-[170px] px-2 pt-1 border-solid border-[2px] border-[#e5e5e5] rounded-[.5rem]" placeholder={placeHolder.one}></textarea>
                            </form>

                        </div>
                    </div>

                    {/* Content */}


                </div>

            </div>

            <div>

                {/* Footer */}


                <div className="ActionFooter" style={ActionFooter}>
                    <div className="px-4 w-[1100px] flex justify-between  ">

                        {
                            cnumber === 96 ?


                                name === expectation ?

                          
                                /* İf Answer right */
                                <div className="flex">
                                    <div className=" m-6 mt-8 mr-5 h-[5rem]  bg-white p-5 rounded-[8rem] w-[5rem] flex justify-center">
                                        <img className="" src={ok} alt="" />
                                    </div>
                                    <div  className="text-[#58a700] pt-6">
                                        <div className="leading-[30px] text-[24px] font-bold pt-1">Well Done!</div>
                                        <div className="flex pt-3 font-medium ">
                                            <div>
                                                <a className="callback flex" href="#/action" >
                                                    <img className="w-[1.1rem] mr-1.5" src={flagComment.greenFlag} alt="" />
                                                    <p>CALLBACK</p>
                                                </a>
                                            </div>
                                            <div className="pl-3">
                                                <a className="discuss flex" href="#/action" >
                                                    <img className="w-[1.1rem] mr-1.5" src={flagComment.greenComment} alt="" />
                                                    <p>DİSCUSS</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> :


                                /* İf Answer wrong */
                                <div className="flex">
                                    <div className=" m-6 mt-8 mr-5 h-[5rem]  bg-white p-5 rounded-[8rem] w-[5rem] flex justify-center">
                                        <img className="rotate-45" src={plus} alt="" />
                                    </div>
                                    <div className="text-[#ea2b2b]  pt-6">
                                        <div className="leading-[30px] text-[24px] font-bold pt-1">Right Answer:</div>
                                        <div className="text-[17px]"> {answer} </div>
                                        <div className="flex pt-3 font-medium ">
                                            <div>
                                                <a className="callback flex" href="#/action" >
                                                    <img className="w-[1.1rem] mr-1.5" src={flagComment.redFlag} alt="" />
                                                    <p>CALLBACK</p>
                                                </a>
                                            </div>
                                            <div className="pl-3">
                                                <a className="discuss flex" href="#/action" >
                                                    <img className="w-[1.1rem] mr-1.5" src={flagComment.redComment} alt="" />
                                                    <p>DİSCUSS</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> :



                                <button style={checkButtonOne} disabled={cnumber === 0 || cnumber === 96} className="checkButtonOne  px-6 text-[#bababa] font-medium" onClick={() => {
                                    lineDecrement();
                                }}>SKIP</button>
                        }


                        <button style={checkButtonTwo} disabled={cnumber === 96 || name === ""} className="checkButtonTwo px-6 text-[#bababa] font-medium" onClick={() => {
                           
                            lineİncrement();
                            calculateTheAnswer();
                        }}>CHECK</button>
                    </div>
                </div>


                {/* Footer */}
            </div>


        </div>

    );
}

export default Action;