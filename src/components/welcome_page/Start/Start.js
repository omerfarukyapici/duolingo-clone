import '../Start/Start.css';
import world from '../welcome_page_img/start_world.svg';

const Start = () => {
    return (
        <>
            <div className="startMain">
                <div className="start-container flex justify-between mx-auto text-white pt-5">
                    <div className="flex justify-center">
                        <img src={world} />
                    </div>
                    <div className="text-center button-part pt-12 px-8 ">

                            <div className="font-bold text-[2rem]">
                                The free, fun, and effective way to learn a language!
                            </div>
                            <div className="font-bold pt-10">
                                <div>
                                    <a className="bg-[#58cc02] start-get-started" href="#/Learn">
                                        GET STARTED
                                    </a>
                                </div>
                            </div>
                            <div className="font-bold pt-10 ">
                                <div >
                                    <a className="bg-[#235390] start-have-account" href="#/Learn">
                                        I ALREADY HAVE AN ACCOUNT
                                    </a>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Start;