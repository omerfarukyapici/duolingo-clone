const BenfPerkComp = ({ benefitİmg, benefitDesc }) => {
    return (
        <div className="p-3 ">
            <div className="block lg:flex justify-around border-solid border-[1px] border-[grey] w-full md:w-[330px]  lg:w-[404px] h-full lg:h-[154px] p-5 rounded-[1rem]">
                <div className=" w-auto lg:w-[200px] h-auto lg:h-[100px] m-2 flex lg:block justify-center " >
                    <img className="w-auto" alt="" src={benefitİmg} />
                </div>
                <div className="pt-4">
                    <p className="text-[#4b4b4b]" >{benefitDesc}</p>
                </div>
            </div>
        </div>

    );
}

export default BenfPerkComp;