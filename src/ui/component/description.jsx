import React from "react";

const Description = () => {
	return (
		<>
			<div id="description" className="description lg:h-screen flex flex-col lg:flex lg:flex-row justify-between">

				<div className=" info md:w-[70%] relative w-full flex flex-col my-24 py-4  md:ml-14">
					<p className="font-medium text-2xl ">Hi, I'm</p>
					<h1 className="font-bold text-7xl md:text-7xl font-grotesk">Tejas Shinde</h1>
					<div className="relative">
						<button type="button" className="font-semibold text-sm  border border-gray-100 p-2 rounded-lg">A Software Engineer</button>
						<p className=" mt-2 text-md ">
							I specialize in building WebApps using React, Next.js, and
							TypeScript, turning designs into engaging web experiences.
						</p>
					</div>
				</div>

				<div className="relative photo w-[80%] md:w-[40%] m-auto flex items-center justify-center md:items-center md:justify-center my-16">
					<img
						className=" h-full w-full md:h-[80%] md:w-[80%] object-cover "
						src="./assets/photo.png"
						alt=""
					/>
					<img
						className="z-[-1] absolute h-60 -translate-x-9 -translate-y-9 rounded-full" 
						src="./assets/logobg.png" 
						alt="" 
					/>
				</div>
			</div>
		</>
	);
};

export default Description;
