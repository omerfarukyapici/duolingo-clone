import laptop from '../../assets/img/welcome/laptop.svg';
import fire from '../../assets/img/welcome/feature-streak.svg';
import check from '../../assets/img/welcome/feature-check.svg';
import crown from '../../assets/img/welcome/crown.svg';
import girl from '../../assets/img/welcome/girl.svg';


const Love = () => {
    return (
        <div className="love flex justify-center">
            <div className="container ">
                <div className="mobile-image  ">
                    <img src={laptop} alt="" />
                </div>
                <h2 className="text-center font-bold">Why you'll love learning with Duolingo</h2>
                <div className="flex justify-between pt-[48px]">
                    <div className="images">
                        <div className="flex justify-around f-i">
                            <div >
                                <img className="fire" src={fire} alt="" />
                            </div>
                            <div className="w-[18rem] love-c">
                                <h3>Make progress quickly</h3>
                                <p>
                                    Research shows our courses effectively
                                    and efficiently teach reading, listening, and
                                    speaking skills.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-around f-i">
                            <div >
                                <img src={check} alt="" />
                            </div>
                            <div className="w-[18rem] love-c">
                                <h3>Personalized learning</h3>
                                <p>
                                    Combining the best of AI and language
                                    science, lessons are tailored to help 
                                    you learn at just the right level and pace.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-12 p-14  hide-this">
                        <img src={laptop} alt="" />
                    </div>
                    <div className="images-2">
                        <div className="flex justify-around f-i">
                            <div >
                                <img src={crown} alt="" />
                            </div>
                            <div className="w-[24rem] love-c">
                                <h3>Stay motivated</h3>
                                <p>
                                    We make it easy to form a habit of language learning,
                                    with game-like feature, fun challenges, and reminders
                                    from our friendly mascot, Duo the owl.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-around f-i">
                            <div >
                                <img className="girl" src={girl} alt="" />
                            </div>
                            <div className="w-[24rem] love-c">
                                <h3>Have fun with it!</h3>
                                <p>
                                    Effective learning doesn't have to be boring! Build your 
                                    skills each day with engaging exercises and playful characters.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Love;    