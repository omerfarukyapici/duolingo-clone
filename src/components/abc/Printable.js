import characters from '../../assets/img/abc/characters.svg';

const Printable = () => {

    return (
        <div className="Printable pt-[5rem] md:pt-[11rem] ">
            <div className='flex justify-center bg-[#a570ff] h-auto md:h-[21.25rem]' >
                <div className='w-[900px] text-white block md:flex px-6 md:px-10'>
                    <div className="flex justify-center md:hidden pt-8">
                        <img src={characters} alt="" />
                    </div>
                    <div className="p-auto md:pr-[5rem] leading-6 pt-10 md:pt-16 text-center md:text-left">
                        <p className="text-2xl font-bold pb-3 ">Free Printable Activities</p>
                        <p className='text-[19px] ' >Download coloring and DIY printables to enhance your child's learning experience!</p>
                        <div className="pt-12 pb-12">
                            <a className='printable-link text-[15px] text-[#a570ff] font-semibold  rounded-2xl p-[12px] px-[30px] bg-white' href="#/abc">GET PRİNTABLES</a>
                        </div>  
                    </div>
                    <div className="hidden md:flex justify-center">
                        <img className="relative -top-[17rem] h-[55rem]" src={characters} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Printable;