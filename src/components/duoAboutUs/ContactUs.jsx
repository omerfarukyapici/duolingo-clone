const ContactUs = () => {
    return (
        <div className="DuoAboutUs-Team py-10 px-3 w-auto lg:w-[900px] flex justify-center">
            <div className="text-center">
                <h2 className=" test-[#3c3c3c] text-[24px] leading-7 font-bold mb-[24px]">Contact us</h2>
                <p className=" text-[#777] text-[17px] leading-6 mb-[18px]">
                    Are you having any trouble? <a href="#/duoaboutus" className="text-[#1cb0f6]">Find help here</a>.
                </p>
                <p className=" text-[#777] text-[17px] leading-6 mb-[18px]">
                    Journalists and bloggers, please reach out to: <a className="text-[#1cb0f6]" href="#/duoaboutus">press@duolingo.com</a>
                </p>
                <p className=" text-[#777] text-[17px] leading-6">
                    Looking to partner with us? <a className="text-[#1cb0f6]" href="#/duoaboutus">partnerships@duolingo.com</a>
                </p>
            </div>
        </div>
    );
}

export default ContactUs;