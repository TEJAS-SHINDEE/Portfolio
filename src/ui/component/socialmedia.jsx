import React from "react";

export const Socialmedia = () => {
	return (
		<>
			<div className="social-media opacity-0 md:opacity-100 h-screen w-[10%] fixed left-1 top-1 z-50 flex flex-col items-center justify-center text-3xl md:fixed md:left-0 md:top-0">
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
		</>
	);
};
