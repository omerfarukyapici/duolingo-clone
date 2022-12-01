const ContentLangComp = ({ langFrag, langName, learners }) => {
    return (
        <a href="#/coursemain">
            <div>
                <div className='flex justify-center pt-8 pb-2'>
                    <img src={langFrag} alt="" />
                </div>

                <p className='font-bold text-[#4b4b4b] pb-1'>{langName}</p>
                <span className='text-[#777] font-medium '>{learners}</span>
            </div>
        </a>
    );
}

export default ContentLangComp;