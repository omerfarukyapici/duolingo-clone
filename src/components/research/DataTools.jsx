import { DataToolComp } from "./DataToolComp";
import icon from "../../assets/img/research/website.svg";
import iconTwo from '../../assets/img/research/download.svg';



export const DataTools = () => {
    return (
        <section className="flex justify-center py-[2rem] bg-[#f9f9f9] lg:py-[5rem]">

            <div>
                <div className="pl-6 lg:pl-0 flex justify-left lg:justify-center pb-10">
                    <h1 className=" w-auto lg:w-[940px] leading-[71px] text-[2.5rem] lg:text-[3.2rem] font-bold text-[#4c4c4c]" >Data & Tools</h1>
                </div>
                <div className="flex justify-center">
                    <div className="w-auto lg:w-[1030px] px-auto lg:px-[2rem] block lg:flex justify-between">
                        <DataToolComp
                            dataLink="#/research"
                            title="2020 Notification Bandit Data"
                            content='Replication data for our KDD 2020 paper, 
                                "A Sleeping, Recovering Bandit Algorithm for Optimizing Recurring Notifications.
                                " Includes 200 million examples of Duolingo practice reminder push notifications sent to
                                Duolingo users over a 35 day period, including which template was used, whether the user converted within 2 hours, and other metadata.'

                            icon={icon}
                            iname="data"
                            iconCn=""
                            dataLinkTwo="#/research"

                        />
                        <DataToolComp
                            dataLink="#/research"
                            title="2020 Notification Bandit Data"
                            content='Replication data for our KDD 2020 paper, 
                                "A Sleeping, Recovering Bandit Algorithm for Optimizing Recurring Notifications.
                                " Includes 200 million examples of Duolingo practice reminder push notifications sent to
                                Duolingo users over a 35 day period, including which template was used, whether the user converted within 2 hours, and other metadata.'

                            icon={icon}
                            iname="data"
                            icontwo={iconTwo}
                            iconCn="dataİcon"
                            inametwo="Website"
                            dataLinkTwo="#/research"
                        />
                    </div>
                </div>

                <div className="flex justify-center" >
                    <div className="w-auto lg:w-[1030px] px-auto lg:px-[2rem] block lg:flex justify-between">
                        <DataToolComp
                            dataLink="#/research"
                            title="2020 Notification Bandit Data"
                            content='Replication data for our KDD 2020 paper, 
                                "A Sleeping, Recovering Bandit Algorithm for Optimizing Recurring Notifications.
                                " Includes 200 million examples of Duolingo practice reminder push notifications sent to
                                Duolingo users over a 35 day period, including which template was used, whether the user converted within 2 hours, and other metadata.'

                            icon={icon}
                            iname="data"
                            icontwo={iconTwo}
                            iconCn="dataİcon"
                            inametwo="Website"
                            dataLinkTwo="#/research"
                        />
                        <DataToolComp
                            dataLink="#/research"
                            title="2020 Notification Bandit Data"
                            content='Replication data for our KDD 2020 paper, 
                                "A Sleeping, Recovering Bandit Algorithm for Optimizing Recurring Notifications.
                                " Includes 200 million examples of Duolingo practice reminder push notifications sent to
                                Duolingo users over a 35 day period, including which template was used, whether the user converted within 2 hours, and other metadata.'

                            icon={icon}
                            iname="data"
                            icontwo={iconTwo}
                            iconCn="dataİcon"
                            inametwo="Code"
                            dataLinkTwo="#/research"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
