export const OurComp = ({
    ourİmg,
    title,
    content,
    ourMobileİmg,
    ourTwoİmg,
    contentClass,
    compClass,

    careerStudentLink,
    careerStudentLinkContent,

    teamFeatures,
    teamDepartment,

    teamLinkedinLink,
    teamLinkedinİmgClass,

    ourMobileİmgStyle,
    ourTwoİmgStyle

}) => {
    return (
        <div className="flex justify-center">


            <div className={compClass}>
                <div className="flex justify-center lg:hidden relative">
                    <img className={ourMobileİmgStyle} alt="" loading="lazy" src={ourMobileİmg} />
                </div>
                <div className="hidden justify-center lg:flex relative">
                    <img className={ourTwoİmgStyle} alt="" loading="lazy" src={ourTwoİmg} />
                </div>
                <div className="flex justify-center">
                    <div className={contentClass}>
                        <h2 className="text-[#58cc02] text-[40px] lg:text-[52px]  leading-1.1 font-bold pb-2 text-center lg:text-left">{title}</h2>

                        <p className="pb-[1rem] text-center lg:text-left text-[27px] font-bold leading-[34px] text-[#4b4b4b]">{teamFeatures}</p>

                        <p className="text-[#777] text-[19px] leading-[25px] text-center lg:text-left">{content}</p>

                        <div className="flex">
                            <p className="career-team-Department text-left text-[#afafaf] leading-1.4 mt-[14px]">{teamDepartment}</p>

                            <div className="pt-[18px] pl-4">
                                <a href={teamLinkedinLink}>
                                    <span className={teamLinkedinİmgClass}></span>
                                </a>
                            </div>

                        </div>

                        <div className="text-center lg:text-left pt-4">
                            <a className="text-[#1cb0f6] hover:text-[#51c3f9] text-[15px] font-bold" href={careerStudentLink}>{careerStudentLinkContent}</a>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex justify-center relative">
                    <img alt="" className={ourTwoİmgStyle} src={ourİmg} />
                </div>
            </div>


        </div>
    );
}