const LangComponent = ({ language , languageFrag , wpHeaderCcn , linkAdress }) => {

    /* wpHeaderCnn = Welcome Page Header Component ClassName  */

    return (
        <div className={wpHeaderCcn}>
            <a className='flex' href={linkAdress}>
                <img src={languageFrag} alt='' />
                <span>{language}</span>
            </a>
        </div>
    );
}

export default LangComponent;