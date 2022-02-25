import '../EfficacyMain.css';

import teacherDou from '../../About_Us_İmg/teacherDou.svg';

const OurMission = () => {
    return (
        <div className="e-OurMission flex justify-center pt-[5rem] pb-10 md:pb-24">
            <div className="e-OurMission-container block lg:flex justify-center md:justify-between lg:justify-between pt-4 md:pt-20 ">
                
                <div className="e-gizle flex justify-center">
                    <img className="px-[1rem]" src={teacherDou} />
                </div>

                <div className=" p-5">
                    <p >efficacy at duolingo</p>
                    <p className="pt-1 md:pt-7">
                        Our mission is to develop the best education in the world and make it universally available.
                        We’re committed to keeping ourselves accountable for the success of our learners. Sharing our approach to
                        teaching and the outcomes of our learners is our way of being transparent and responsible.
                    </p>
                </div>

                <div className="e-goster pl-20 flex justify-center">
                    <img className="px-[1rem]" src={teacherDou} />
                </div>
                 
            </div>
        </div>
    );
}

export default OurMission;