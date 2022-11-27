import noDuolingo from '../../assets/img/welcome/no-duolingo.svg';

const NumberOne = () => {
    return (
        <div className="numberOne flex justify-center pt-4 ">
            <div className="container flex justify-between p-[2.5rem] pb-9">
                <div className="flex justify-center pb-7">
                    <img className="w-[10rem] " src={noDuolingo} alt="" />
                </div>
                <div className="textContent">
                    <h2 className="pt-3 font-bold text-[#3c3c3c]">The world's #1 way to learn a language</h2>
                    <p>
                        Learning with Duolingo is fun, and <a className="font-bold" target="_blank" href="#/efficacy">research shows that it works</a>! With quick, bite-sized lessons,
                        you'll earn points and unlock new levels while gaining real-world comminication skills.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NumberOne;