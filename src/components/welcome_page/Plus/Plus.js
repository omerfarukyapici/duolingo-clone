import plus from '../welcome_page_img/plus.svg';

const Plus = () => {


    return (
        <div className="numberOne flex justify-center pt-4 ">
            <div className="container flex justify-between p-[2.5rem] pb-9">
                <div className="flex justify-center pb-7">
                    <img className="w-[10rem] " src={plus} alt="" />
                </div>
                <div className="textContent">
                    <h2 className="pt-3 font-bold text-[#3c3c3c]">Boost your learning with Duolingo Plus</h2>
                    <p>
                        Learning a language on Duolingo is completely free, but you can remove ads and make faster progress with Plus. Try it free for 14 days!
                    </p>
                    <a className="text-[#1cb0f6] font-bold hide-underline" href="#/">LEARN MORE ABOUT DUOLINGO PLUS</a>
                </div>
            </div>
        </div>
    );
}
export default Plus;