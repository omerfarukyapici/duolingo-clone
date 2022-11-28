import lingotİmg from '../ShopPage/Shopİmg/lingot.svg';

export const ShopPowerUp = ({
    img,
    powerTitle,
    powerContent,
    lingotNumber
}) => {
    return (
        <div className='block sm:flex border-t-[2px] border-solid border-[#e5e5e5] py-4'>
            <div className='flex justify-center'>
                <div className='flex justify-center w-[100px]'>
                    <img className='w-full' src={img} alt="" />
                </div>
            </div>

            <div className=' w-auto lg:w-[400px] pt-2 text-center sm:text-left'>
                <p className='text-[19px] font-bold text-[#3c3c3c] pb-2'> {powerTitle} </p>
                <p className='text-[#777] leading-1.75'> {powerContent} </p>
            </div>
            <div className='flex justify-center sm:block py-4 sm:py-0'>
                <a href="#/shop" className='shopPowerUpLink flex justify-center bg-white rounded-[.7rem] w-[8rem] py-2 border-solid border-[#d7d4d4] border-[2px]'>
                    <div className='flex text-[#ff4b4b] font-bold'>
                        <p>PRİCE:</p>
                        <img className='mx-1 w-[1.2rem]' src={lingotİmg} alt="" />
                        <p>{lingotNumber}</p>
                    </div>
                </a>
            </div>
        </div>
    );
}