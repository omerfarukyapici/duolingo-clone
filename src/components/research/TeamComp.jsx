import "../../assets/styles/research.css";

export const TeamComp = ({ tname, posit, timg }) => {
    return (
        <div className="TeamComp ">
            <div >
                <div >
                    <img className="Teamİmg" alt="" src={timg} />
                </div>

                <div className="show ">
                    <p className="font-bold pt-14 text-[18px]">{tname}</p>
                    <p className="text-[14px]">{posit}</p>
                </div>
            </div>

        </div>
    );
}