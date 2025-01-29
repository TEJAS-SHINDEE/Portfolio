import React from "react";

const AboutMe = () => {
	return (
		
		<section
					className="about  flex flex-col pt-28 lg:pt-48 mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%] "
					id="about"
				>
					<div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-bold">
						<div className="w-[5%%] lg:hidden lg:w-36 border-b-[1px] border-b-border-color"> </div>
						<span className="font-bold text-lg sm:text-2xl  ">
							01.&nbsp;&nbsp;<span className="italic">About Me</span>
						</span>
						<div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color "> </div>
					</div>
					
					<div className="about flex flex-col lg:flex-row w-full py-10 gap-10 ">

						<div className="w-full lg:w-[50%] flex flex-col gap-2 order-2 lg:order-1">
							<h4 className="font-bold">
								Technologies I work with{" "}
							</h4>
							<div 
								// className="bg-[url('./assets/tec2h-bg.png')] bg-white opacity-50" 	
							>
								<ul className="px-8 py-8 flex flex-row  h-auto sm:flex-col gap-4 sm:h-80 lg:gap-2 lg:h-72  flex-wrap w-full font-idgrotesk">
									{/* <li className="flex filter grayscale hover:grayscale-0  items-center cursor-pointer gap-5 transition-all duration-300 dark:filter dark:brightness-50 dark:invert hover:dark:brightness-100 hover:dark:invert-0">
										<img src="" alt="" />
										<span> </span>   // original style
									</li> */}
									<li className="flex filter  items-center cursor-pointer gap-5 transition-all duration-300 ">
										<img src="./assets/html.png" height={50} width={50} alt="" />
										<span className="hidden sm:inline-block font-bold italic">HTML</span>
									</li>
									<li className="flex filter  items-center cursor-pointer gap-5 transition-all duration-300 ">
										<img src="./assets/react.png" height={50} width={50} alt="" />
										<span className="hidden sm:inline-block font-bold italic">React</span>
									</li><li className="flex filter  items-center cursor-pointer gap-5 transition-all duration-300 ">
										<img src="./assets/css.png" height={50} width={50} alt="" />
										<span className="hidden sm:inline-block font-bold italic">css</span>
									</li><li className="flex filter  items-center cursor-pointer gap-5 transition-all duration-300 ">
										<img src="./assets/javascript.png" height={50} width={50} alt="" />
										<span className="hidden sm:inline-block font-bold italic">JavaScript</span>
									</li><li className="flex filter  items-center cursor-pointer gap-5 transition-all duration-300 ">
										<img src="./assets/nodejs.png" height={50} width={50} alt="" />
										<span className="hidden sm:inline-block font-bold italic">NodeJs</span>
									</li><li className="flex filter  items-center cursor-pointer gap-5 transition-all duration-300 ">
										<img src="./assets/mongodb.png" height={50} width={50} alt="" />
										<span className="hidden sm:inline-block font-bold italic">MongoDB</span>
									</li><li className="flex filter  items-center cursor-pointer gap-5 transition-all duration-300 ">
										<img src="./assets/tailwind.png" height={50} width={50} alt="" />
										<span className="hidden sm:inline-block font-bold italic">Tailwind CSS</span>
									</li><li className="flex filter  items-center cursor-pointer gap-5 transition-all duration-300 ">
										<img src="./assets/git.png" height={50} width={50} alt="" />
										<span className="hidden sm:inline-block font-bold italic">Git</span>
									</li>
								</ul>
							</div>
						</div>

						<div className="aboutMe w-full lg:w-[50%] order-1 lg:order-2">
							<article>
								Tejas Shinde is a software Engineer based in Warana, kolhapur. I
								have developed web applications using JavaScript and
								TypeScript.I love turning designs and ideas into cool web
								experiences, and work closely with Product designers and backend
								developers to bring these ideas to life. <br /> I have
								contributed to numerous projects, collaborating with product
								designers, backend developers, DevOps, and other tech
								professionals. <br /><br />
								Over this period, I have worked and interned at startups and
								companies such as Pathpalz, Berrystamp, and JustDoStartUp. I
								have a strong passion for learning and teaching, and am always
								updated with the latest advancements in technology.
							</article>
						</div>
					</div>
				</section>
	);
};

export default AboutMe;
