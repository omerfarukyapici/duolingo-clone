import { useState } from "react";
import '../StoriesPage/LearnStories.css';

export const TrainingStoriesComp = ({
    /* General Props */
    img,
    textOne,
    textTwo,
    imgClass,

    /* Training Features Props */
    featuresClass,
    level,
    linkClass

}) => {

    const [storieFeatures, setStorieFeatures] = useState(false);

    return (
        <div className="pb-6">
            <div className="trainingStoriesComp">
                <button onClick={
                    () => {
                        setStorieFeatures(!storieFeatures);
                    }
                }>

                    <img className={imgClass} src={img} alt="" />

                    <p className="text-[#4b4b4b] text-[17px] font-bold leading-[21px] mt-[16px]">{textOne}</p>
                </button>
                <p className="text-center text-[#afafaf] text-[15px] font-bold leading-[21px] ">{textTwo}</p>

                {
                    storieFeatures ?

                        <div className={featuresClass}>
                            <p className="pb-4 text-[18.5px] font-bold text-white"> {level} </p>

                            <div className="flex justify-center bg-white rounded-[.5rem] font-bold">
                                <a className={linkClass} href="#/learnstories">START +14 XP</a>
                            </div>

                        </div>

                        : null
                }



            </div>
        </div>

    );
}