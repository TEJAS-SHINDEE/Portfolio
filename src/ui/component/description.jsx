import React from "react";

const Description = () => {
	return (
		<>
			<div id="description" className="description  lg:h-screen flex flex-col lg:flex lg:flex-row justify-between">

				<div className=" info xl:w-[70%] relative w-full flex flex-col ">
					<span className="font-medium text-lg">Hi, I'm</span>
					<h1 className="font-bold text-6xl md:text-7xl ">TEJAS SHINDE</h1>
					<div className="relative">
						<button className="font-semibold text-xl bg-slate-300 p-2 rounded-lg">Software Engineer</button>
						<p className=" mt-2 ">
							I specialize in building WebApps using React, Next.js, and
							TypeScript, turning designs into engaging web experiences.
						</p>
					</div>
				</div>

				<div className="photo w-[80%] md:w-[30%] md:flex md:items-center md:justify-center ">
					<img
						className="h-full w-full object-cover"
						src="./assets/photo.png"
						alt=""
					/>
				</div>
			</div>
		</>
	);
};

export default Description;
