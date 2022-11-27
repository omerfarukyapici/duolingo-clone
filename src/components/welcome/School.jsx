import  schoolLaptop from '../../assets/img/welcome/laptop-schools.svg';

const School = () => {
    return(
        <div className="numberOne flex justify-center pt-4 ">
            <div className="container flex justify-between p-[2.5rem] pb-9">
                <div className="flex justify-center pb-7 mr-7">
                    <img className="w-[15.313rem] " src={schoolLaptop} alt="" />
                </div>
                <div className="textContent">
                    <h2 className="pt-3 font-bold text-[#3c3c3c]">Duolingo for Schools</h2>
                    <p>
                    Free teacher tools to help students learn languages through the Duolingo app, both in and out of the classroom.
                    </p>
                    <a className="text-[#1cb0f6] font-bold hide-underline" href="#/duoforschool">BRING DUOLINGO TO YOUR CLASSROOM</a>
                </div>
            </div>
        </div>
    );
}

export default School;
