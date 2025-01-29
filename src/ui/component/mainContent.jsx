import React from "react";
import Description from "../component/description.jsx";
import AboutMe from "./aboutMe.jsx";
import Project from "./project.jsx";
import Email from "./email.jsx";
import {Footer} from "./footer.jsx";

const MainContent = () => {
	
	return (
		<>
			<div className="main-content h-full px-5 sm:px-12 ">
				{/* <Description /> */}
				<Description />

				{/* <AboutMe /> */}
				<AboutMe />

				{/* <Project /> */}
				{/* <Project/> */}

				{/* <Email /> */}
				<Email/>

				{/* footer */}

				<Footer/>
				
			</div>
		</>
	);
};
export default MainContent;
