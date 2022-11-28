import box from '../Learnİmg/box.svg';

export const LeagueCompOne = () => {
    return(
        <div className='bg-white m-2 p-6 rounded-[1rem] border-[2px] border-solid border-[#d6d8da]'>
            <div className="flex justify-between">
                <h2 className="text-[#3c3c3c] text-[24px] leading-[26px] font-bold">XP Progress</h2>
                <div>
                    <a href="#/learn">EDİT GOAL</a>
                </div>
            </div>
            <div className="flex pt-3">
                <div>
                    <img src={box} alt='' />
                </div>
                <div className='pl-3'>
                    <div className='py-2'>Daily Goal</div>
                    <div className='flex justify-center'>
                        <p className='w-[160px] h-[14px] block rounded-[3rem] bg-[#E5E5E5] mt-1.5 mr-2'></p>
                        <p className='text-[#cdcbcb] font-bold'> / 20 XP</p>
                    </div>
                </div>
            </div>
        </div>
    );
}