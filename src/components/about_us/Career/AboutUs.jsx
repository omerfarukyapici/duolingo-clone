import CareerOurPart from '../../../Press/Our/OurComp';
import ourPartOne from '../../../Press/Pressİmg/ourOne.svg';
import ourPartTwo from '../../../Press/Pressİmg/ourTwo.svg';
import ourTeamİmg from '../../Careerİmg/analist.svg';
import ourPeople from '../../Careerİmg/ourPeople.svg'
import ourCulture from '../../Careerİmg/ourCulture.svg'
import CareerProducts from '../../../Press/OurProducts/OurProducts';



const AboutUs = () => {
	return (
		<div className="flex justify-center">
			<div>
				<div className="w-auto lg:w-[1080px] pb-20 border-b-[2px] border-solid border-[#d6d8da]">
					<CareerOurPart
						compClass="block lg:flex py-[1rem] px-2"
						ourMobileİmg={ourPartOne}
						title="our mission"
						content="We’re here to develop the best education in the world and make it universally available.
                    	Our global team works together to make language learning fun, free, and effective for anyone who wants to
                    	learn, wherever they are."
						ourİmg={ourPartOne}
						contentClass="w-full lg:w-[520px] m-2 lg:m-20"
					/>
					<CareerOurPart
						compClass="block lg:flex py-[1rem] pl-0 lg:pl-16 px-2"
						ourTwoİmg={ourPartTwo}
						ourMobileİmg={ourPartTwo}
						title="our offices"
						content="We’re headquartered in Pittsburgh, Pennsylvania. Called the City of Bridges, it’s where we’re making language 
						learning a bridge to opportunity for millions around the world. We also have offices in New York, Seattle, Beijing, and Berlin."
						ourİmg=""
						contentClass="w-full lg:w-[500px] pl-0 lg:pl-10 m-2 lg:m-20"
					/>
				</div>

				<div className="py-[4rem]">
					<div className="w-auto lg:w-[1080px] pb-20 px-3 border-b-[2px] border-solid border-[#d6d8da]">
						<h2 className="text-[#58cc02] text-[40px] lg:text-[52px]  leading-1.1 font-bold pb-2 text-center ">our teams</h2>
						<div className="flex justify-center py-[1rem]">
							<p className="text-[#777] text-[19px] leading-[25px] text-center w-auto lg:w-[700px]">From engineering to animation, data science to design, we collaborate cross-functionally to make learning fun.</p>
						</div>
						<div className="flex justify-center">
							<img src={ourTeamİmg} alt="" />
						</div>
					</div>
				</div>

				<div className="w-auto lg:w-[1080px] pb-20 border-b-[2px] border-solid border-[#d6d8da]">
					<CareerOurPart
						compClass="block lg:flex py-[1rem] px-2"
						ourMobileİmg={ourPeople}
						title="our people"
						content="We’re proud to say that Duolingo was founded by two immigrants, and our 500+ employees come from more than 30 
						countries. More than half of our employees are women or people of color, and women are represented at all levels of 
						company leadership."
						ourİmg={ourPeople}
						contentClass="w-full lg:w-[520px] m-2 lg:m-20"
					/>
					<CareerOurPart
						compClass="block lg:flex py-[1rem] pl-0 lg:pl-16 px-2"
						ourTwoİmg={ourCulture}
						ourMobileİmg={ourCulture}
						title="our offices"
						content="We’re headquartered in Pittsburgh, Pennsylvania. Called the City of Bridges, it’s where we’re making language 
					learning a bridge to opportunity for millions around the world. We also have offices in New York, Seattle, Beijing, and Berlin."
						ourİmg=""
						contentClass="w-full lg:w-[500px] pl-0 lg:pl-10 m-2 lg:m-20"
					/>
				</div>
				<CareerProducts />

			</div>
		</div>
	);
}

export default AboutUs;