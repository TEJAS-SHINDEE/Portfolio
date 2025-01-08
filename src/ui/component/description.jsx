import React from "react";

const Description = () => {
	return (
		<>
			<div className="description  md:flex h-screen ">
				<div className=" info  md:w-[60%] md:p-16 w-full">
					<p className=" text-[1.5rem] m-2 md:text-2xl font-semibold md:m-2">
						Hi, I'm
					</p>
					<h2 className="text-[2rem] md:text-6xl font-semibold m-2">
						TEJAS SHINDE
					</h2>
					<h4 className="font-semibold text-xl m-2">Software Engineer</h4>
					<p className="leading-6 m-2 ">
						I specialize in building WebApps using React, Next.js, and
						TypeScript, turning designs into engaging web experiences.
					</p>
				</div>

				<div className="photo  md:w-[40%] w-full">
					<img
						className=" h-full w-full object-cover p-10"
						src="./assets/photo.png"
						alt=""
					/>
				</div>
			</div>
		</>
	);
};

export default Description;
