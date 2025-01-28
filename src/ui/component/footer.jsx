import React from "react";

export const Footer = () => {
	return (
		<div className="footer py-6 flex flex-col justify-center items-center sm:text-lg border-t">
			<p className="text-center text-lg ">
				Designed by{" "}
				<span className="font-bold text-secondary-color-3 text-[#e88d67]">
					Tejas 👨‍💻{" "}
				</span>{" "}
				<br />( Inspiration from <span className="font-bold">Farook</span> )
			</p>
			<p className="text-center text-lg  ">&copy; 2025 All rights reserved</p>
			<p className="text-3xl scroll-smooth "><a href="#description" ><button type="button"><i class="ri-arrow-up-circle-fill"> </i></button></a></p>
		</div>
	);
};
