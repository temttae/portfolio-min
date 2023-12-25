import Education from './components/education';
import Projects from './components/projects';
import Experiences from './components/experiences';
import Skills from './components/skills';
import Social from './components/social';

const Page = () => {

	return (
		<div className="flex flex-col gap-8 mx-4 my-16 md:mx-0">
			<div className="flex flex-col gap-8 md:flex-row">
				<div className="flex flex-col gap-4">
					<h1 className="text-4xl font-bold">
						Tem <span className="text-primary">Taepaisitphongse</span>
					</h1>
					{/* <p>
						Software Engineer |
            <span className="font-bold"> Org Name | Current Project </span> 
            <span className="ml-1 px-2 py-1 text-xs rounded-md text-primary bg-primary/10">
							<span>CURRENT</span>
						</span>
					</p> */}
          <p>Hi! 👋</p>
					<p className="text-justify">
            My name is Tem Taepaisitphongse and I'm a first year computer science student 
            at the University of Michigan.
          </p>
				</div>
			</div>
			<div className="flex gap-2">
				<div className="px-2 py-1 text-sm rounded-md text-primary bg-primary/10" 
             aria-label="Interest: Frontend">
					Frontend
				</div>
				<div className="px-2 py-1 text-sm rounded-md text-primary bg-primary/10" 
             aria-label="Interest: Backend">
					Backend
				</div>
			</div>

			<Education />

			<Experiences />

			<Projects />

			<Skills />

			<Social />

			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold">Contact</h2>
        <p>
          <span>Email: </span>
          <a href="mailto:temt4510@gmail.com" className="italic underline text-primary">
            temt4510@gmail.com
          </a>
        </p>
			</div>

			<p className="text-xs">
				Last Updated: 12/2023, adapted from&nbsp;
        <a href='https://new.bhaskarrijal.me/' target='_blank' className='italic underline text-primary'>this site</a>
			</p>
		</div>
	);
};

export default Page;