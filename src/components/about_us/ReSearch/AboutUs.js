const AboutUs = () => {
    return (
        <section className="About-us flex justify-center bg-[#f9f9f9] py-[2rem] lg:py-[5rem]">
            <div className=" w-[1100px] px-6 lg:px-[5rem] block lg:flex justify-between">
                <h1 className="leading-[71px] text-[2rem] lg:text-[3.25rem] font-bold text-[#4c4c4c] pb-[1rem]">About Us</h1>
                <p className="w-full lg:w-[492px] text-[#4c4c4c] text-[1.0625rem] leading-[26px]">With more than 500 million learners, Duolingo has the world's largest collection of
                    language-learning data at its fingertips. This allows us to build unique systems,
                    uncover new insights about the nature of language and learning, and apply existing
                    theories at scales never before seen. We are also committed to sharing <a className="text-[#1cb0f6] hover:text-[#0883be]" href="#/research" >publications </a>
                    and <a className="text-[#1cb0f6] hover:text-[#0883be]" href="#/research">data</a>  with the broader research community.
                </p>
            </div>
        </section>
    );
}

export default AboutUs;