import "../../assets/styles/welcome.css";
import speakİmg from '../../assets/img/efficacy/speak.svg';


export const Speaking = () => {
    return (
        <div className="e-Speaking flex justify-center" >
            <div className="e-Speaking-Container pt-20 pb-20">
                <div className="text-center e-speak-p" >
                    <p>Speaking</p>
                </div>
                <div>
                    <img className="w-full" src={speakİmg} />
                </div>
                <div className=" flex justify-center " >
                    <div className=" px-6 pt-2 md:pt-4  md:w-[600px]">
                        In a study focused on speaking skills, we tested 258 Duolingo
                        learners taking the French and Spanish courses who had completed
                        Duolingo Unit 5, the beginner-level section of the course. These
                        learners had little to no previous knowledge of the target language
                        and used Duolingo as their only learning tool. The study found that
                        about half of these learners achieved at least A2-level speaking skills
                        according to the CEFR guidelines, meaning they’re able to produce complete
                        sentences, remember words quickly, and speak comfortably about everyday
                        topics at a conversational pace. View the <a className="e-blue" href="#/">full research report</a> , or read our
                        <a className="e-blue" href="#/">blog post</a> for an overview of the study and its findings.
                    </div>
                </div>
                <div className="flex justify-center pt-8">
                    <a className="e-speak-a" href="#/efficacy" >READ BLOG POST</a>
                </div>
            </div>

        </div>

    );
}