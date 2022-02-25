import duoTest from '../welcome_page_img/duo-test.svg';

const Eng_Test = () => {
    return(
        <div className="eng-test mobile numberOne flex justify-center pt-4 ">
            <div className="container mobile-mobile-desk flex justify-between p-[2.5rem] pb-9">
                <div className="textContent">
                    <h2 className="pt-3 font-bold text-[#3c3c3c]">The Duolingo English Test</h2>
                    <p>
                    Welcome to the convenient, fast, and affordable English test accepted around the world. By integrating the latest assessment science and AI, we empower anyone to take the test where and when they’re at their best.
                    </p>
                    <a className="eng-test-a text-[#1cb0f6] font-bold hide-underline left-p-0" href="#/">CERTIFY YOUR ENGLISH</a>
                </div>
                <div className="flex justify-center pb-7">
                    <img className="w-[10rem] " src={duoTest} alt="" />
                </div>
            </div>





            <div className="mobile-mobile container flex justify-between p-[2.5rem] pb-9">
                <div className="flex justify-center pb-7">
                    <img className="w-[10rem] " src={duoTest} alt="" />
                </div>
                <div className="textContent">
                    <h2 className="pt-3 font-bold text-[#3c3c3c]">The Duolingo English Test</h2>
                    <p>
                    Welcome to the convenient, fast, and affordable English test accepted around the world. By integrating the latest assessment science and AI, we empower anyone to take the test where and when they’re at their best.
                    </p>
                    <a className="eng-test-a text-[#1cb0f6] font-bold hide-underline pt-6" href="#/">CERTIFY YOUR ENGLISH</a>
                </div>

            </div>
        </div>
    );
}

export default Eng_Test;