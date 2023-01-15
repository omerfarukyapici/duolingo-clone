import { useState } from 'react';
import down from "../../assets/img/career/down.svg";

const QuestionsComp = ({
    questionContent,

    partOne,
    partTwo,
    partThree,
    partFour,

    partOneStyle,
    partTwoStyle,
    partThreeStyle,
    partFourStyle
}) => {

    const [answer, setAnswer] = useState(false);


    return (
        <div className='w-full lg:w-[906px] border-b-[2px] border-solid border-[#d6d8da]'>
            <button className='w-full lg:w-[906px] m-1 ' onClick={() => {
                setAnswer(!answer)
            }}>
                <div className='py-[1.6rem] flex justify-between'>
                    <h2 className='text-left text-[#4b4b4b] text-[19px] leading-[27px] font-bold break-words'>{questionContent}</h2>
                    
                    <img className='hidden md:block' alt='' src={down} />
                </div>
            </button>
            {
                answer ?
                    <div className='w-full lg:w-[906px] text-[#777] mb-10 break-words '>
                        <p className={partOneStyle}>{partOne}</p>
                        <p className={partTwoStyle}>{partTwo}</p>
                        <p className={partThreeStyle}>{partThree}</p>
                        <p className={partFourStyle}>{partFour}</p>
                    </div>

                    : null
            }

        </div>
    );
}
export default QuestionsComp;