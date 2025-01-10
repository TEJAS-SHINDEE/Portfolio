import React from "react";

const Description = () => {
	return (
		<>
			<div className="description  h-screen flex flex-col lg:flex lg:flex-row justify-between">
					<section className=" info xl:w-[70%] relative pb-10 w-full flex flex.col gap-4 ">
						<div className="flex flex-col gap-2">
						<span className="font-medium text-lg ">
							Hi, I'm
						</span>
						<h1 className="font-bold text-xl md:text-7xl">
							TEJAS SHINDE
						</h1>
						</div>
						<div className="relative">
							<h4 className="font-semibold text-xl m-2">Software Engineer</h4>
							<p className=" mt-2 ">
								I specialize in building WebApps using React, Next.js, and
								TypeScript, turning designs into engaging web experiences.
							</p>
						</div>
					</section>

					<div className="photo md:w-[40%] md:flex md:items-center md:justify-center ">
						<img
							className="h-96 w-96 object-cover"
							src="./assets/photo.png"
							alt=""
						/>
					</div>
				</div>
		</>
	);
};

export default Description;
