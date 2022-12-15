/* import JobData from './jobs.json'; */

import React from 'react';
import Jobs from "../../data/career/jobs.json"

const JobOpening = () => {

    return (
        <div className='flex justify-center'>


            <div className='w-full lg:w-[1030px] px-4'>

                <h1 className='text-[52px] font-bold text-[#58cc02] text-left py-6'>job openings</h1>
                <div className='block lg:flex justify-left pb-6'>
                    <div className='m-3 ml-0 sm:ml-3'>
                        <select className='rounded-[.6rem] text-[1.1rem] pl-0 md:pl-2.5 p-2.5 w-full md:w-[270px] border-none md:border-solid opacity-50 border-[#777] border-b-[4px] border-[2px]'>
                            <option value>All types</option>
                            <option value="Industry">Industry</option>
                            <option value="Intern">Intern</option>
                            <option value="New Grad">New Grad</option>
                            <option value="Thrive Program">Thrive Program</option>
                        </select>
                    </div>


                    <div className='m-3 ml-0 sm:ml-3'>
                        <select className='rounded-[.6rem] text-[1.1rem] pl-0 md:pl-2.5 p-2.5  w-full md:w-[270px] border-none md:border-solid opacity-50 border-[#777] border-b-[4px] border-[2px]'>
                            <option value>All departments</option>
                            <option value="AI + Machine Learning Engineering">AI + Machine Learning Engineering</option>
                            <option value="Assessment + Psychometrics">Assessment + Psychometrics</option>
                            <option value="Business Development">Business Development</option>
                            <option value="Content Operations">Content Operations</option>
                            <option value="Corporate Development">Corporate Development</option>
                            <option value="Data Science + Analytics">Data Science + Analytics</option>
                            <option value="Design">Design</option>
                            <option value="Finance + Accounting">Finance + Accounting</option>
                            <option value="Learning + Curriculum">Learning + Curriculum</option>
                            <option value="Legal">Legal</option>
                            <option value="Marketing">Marketing</option>
                            <option value="People">People</option>
                            <option value="Product Management">Product Management</option>
                            <option value="Software Engineering">Software Engineering</option>
                            <option value="Strategy + Business Operations">Strategy + Business Operations</option>
                            <option value="UX Research">UX Research</option>
                        </select>
                    </div>


                    <div className='m-3 ml-0 sm:ml-3'>
                        <select className='rounded-[.6rem] text-[1.1rem] pl-0 md:pl-2.5 p-2.5  w-full md:w-[270px] border-none md:border-solid opacity-50 border-[#777] border-b-[4px] border-[2px]'>
                            <option value >All locations</option>
                            <option value="Berlin, Germany">Beijing, China</option>
                            <option value="New York, NY">New York, NY</option>
                            <option value="Pittsburgh, PA">Pittsburgh, PA</option>
                            <option value="Seattle, WA">Seattle, WA</option>
                            <option value="Washington, DC">Washington, DC</option>
                        </select>
                    </div>
                </div>

                <div className='flex justify-left'>
                    <div>

                        {/* Taking jobs data from jobs.json file */}
                        {
                            Jobs.map((item, key) => {
                                return (
                                    <div className='text-left py-3' key={key}>
                                        <p className='text-[#1cb0f6] font-bold'> <a href='#/career' >{item.Description}</a>  </p>
                                        <p className='text-[grey] pt-1'> {item.Location} </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='text-left border-solid border-b-[1px] border-t-[1px] border-[#ACA292]' >
                    <h6 className='text-[1.4em] font-bold text-[#3b3b3b] pt-[4rem] pb-[2rem]'>Freelance positions</h6>
                    <p className='text-[#ACA292] w-full lg:w-[600px]'>Duolingo is constantly exploring new ways to reach language learners. Help us expand
                        our mission through these specialty freelance opportunities. While these roles are exempt
                        from full-time employment benefits, they offer the opportunity to collaborate with the Duolingo
                        team on content that will reach millions of learners worldwide.</p>
                    <div className='py-[3rem]'>
                        <a className='text-[#1cb0f6] font-bold ' href='#/career' >VIEW FREELANCE LISTINGS</a>
                    </div>
                </div>



            </div>








        </div>
    );
}

export default JobOpening;
