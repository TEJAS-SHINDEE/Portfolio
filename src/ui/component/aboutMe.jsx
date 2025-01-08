import React from "react";

const AboutMe = () => {
	return (
		<>
			<h1 className='text-2xl font-semibold m-10 pl-10'>01.&nbsp;&nbsp;About Me</h1>
			<div className="about flex flex-col md:flex-row">
				<div className="tech-stack w-2/4 p-10 md:w-full">
					<h4 className="bg-red-200 text-center">Technologies i work with </h4>
					<div className="">
						<ul className="grid grid-cols-4 grid-flow-row ">
							<li className="m-6 text-4xl">
								<i class="ri-html5-line"> </i>{" "}
							</li>
							<li className="m-6 text-4xl">
								<i class="ri-css3-line"> </i>{" "}
							</li>
							<li className="m-6 text-4xl">
								<i class="ri-javascript-line"> </i>
							</li>
							<li className="m-6 text-4xl">
								<i class="ri-java-line"> </i>
							</li>
							<li className="m-6 text-4xl">
								<i class="ri-reactjs-line"> </i>
							</li>
							<li className="m-6 text-4xl">
								<i class="ri-tailwind-css-line"> </i>
							</li>
							<li className="m-6 text-4xl">
								<i class="ri-nodejs-line"> </i>
							</li>
							<li className="m-6 text-4xl">
								<i class="ri-database-2-line"> </i>
							</li>
						</ul>
					</div>
				</div>
				<div className="aboutMe w-2/4 md:w-full font-serif text-lg	">
					<p className="p-10">
						Tejas Shinde is a software Engineer based in Warana, kolhapur. I
						have developed web applications using JavaScript and TypeScript.I
						love turning designs and ideas into cool web experiences, and work
						closely with Product designers and backend developers to bring these
						ideas to life. <br /> I have contributed to numerous projects, collaborating
						with product designers, backend developers, DevOps, and other tech
						professionals.
					</p>
                    {/* <p className="p-10">
                         Over this period, I have worked and interned at
						startups and companies such as Pathpalz, Berrystamp, and
						JustDoStartUp. I have a strong passion for learning and teaching,
						and am always updated with the latest advancements in technology.
                    </p> */}
				</div>
			</div>
		</>
	);
};

export default AboutMe;
