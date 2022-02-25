export const LearnButtonComp = ({ btnClass, btnTitle, btnDivClass, btnAddress }) => {
    return (
        <div className={btnDivClass}>
            <a href={btnAddress} className={btnClass} >
                {btnTitle}
            </a>
        </div>

    )
}