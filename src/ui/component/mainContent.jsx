import React from "react";
import Description from "../component/description.jsx";
import AboutMe from "./aboutMe.jsx";
import Project from "./project.jsx";
import Email from "./email.jsx";

const MainContent = () => {
	return (
		<>
			<div className="main-content h-screen pl-[3rem] pr-[3rem] md:h-screen  md:ml-[10%] md:pl-[3rem] md:pr-[3rem]">
				<Description />
				<AboutMe />
				<Project />
				<Email />
			</div>
		</>
	);
};
export default MainContent;
