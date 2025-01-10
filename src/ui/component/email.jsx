import React from "react";

const Email = () => {
	return (
		<div
					className="text-center  sm:w-[85%] m-auto pb-52 lg:py-52 w-full "
					id="contact"
				>
					<div className="flex flex-col gap-2 justify-center items-center w-full sm:w-[85%] m-auto">
						<h2 className=" text-lg sm:text-3xl font-semibold italic text-[#e88d67]">
							What next..? Let's Talk..!
						</h2>
						<h3 className="text-2xl sm:text-4xl font-bold">Get in Touch</h3>
						<p className="text-base sm:text-lg">
							I'm currently open to new job opportunities. Contact me if you are
							interested in having me on your team, working on your project,
							seeking mentorship, or just want to say hello. Please click the
							button below or send an email to tejasXXssndeXXXX@gmail.com.
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
				</div>
	);
};

export default Email;
