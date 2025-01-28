import React from "react";

const Email = () => {
	return (
		<div
			className="text-center  sm:w-[85%] m-auto pb-16` lg:py-12 w-full "
			id="contact"
		>
			<div className="flex flex-col gap-2 justify-center items-center w-full sm:w-[85%] m-auto">
				<h2 className=" text-lg sm:text-3xl font-semibold italic text-[#e88d67]">
					What next..? Let's Talk..!
				</h2>
				<h3 className="text-2xl sm:text-4xl font-bold">Get in Touch</h3>
				<p className="text-base sm:text-lg">
					I'm currently open to new job opportunities. Contact me if you are
					interested in having me on your team, working on your project, seeking
					mentorship, or just want to say hello. Please click the button below
					or send an email to tejasXXssndeXXXX@gmail.com.
				</p>
				<div className="flex items-center justify-center">
					<button
						className="border rounded-xl font-semibold  p-2"
						type="button"
					>
						Send a Message &nbsp;
						<span className="text-xl ">
							{" "}
							<i class="ri-message-2-line"> </i>
						</span>
					</button>
				</div>
			</div>
			<div className="social-media text-3xl flex flex-row justify-center align-center  inline md:hidden ">
				<div className="m-3 hover:text-gray-700 ">
					<a href="https://github.com/tejas-shinde-8022">
						<i class="ri-github-fill"> </i>{" "}
					</a>
				</div>
				<div className="m-3 hover:text-[#0077B5]">
					<a href="www.linkedin.com/in/tejas-shinde-connect">
						{" "}
						<i class="ri-linkedin-box-fill"> </i>
					</a>
				</div>
				<div className="m-3 hover:text-[#1da1f2]">
					<a href="https://x.com/">
						{" "}
						<i class="ri-twitter-fill"> </i>
					</a>
				</div>
				<div className="m-3 hover:text-[#ff0069] ">
					<a href="https://www.instagram.com/">
						<i class="ri-instagram-line"> </i>{" "}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Email;
