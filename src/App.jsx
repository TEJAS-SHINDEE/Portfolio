import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./ui/component/header.jsx";
import { Socialmedia } from "./ui/component/socialmedia.jsx";
import MainContent from "./ui/component/mainContent.jsx";
import { Footer } from "./ui/component/footer.jsx";

// function App() {
// 	return (
// 		<>
// 			<Header />
// 			<Socialmedia />
// 			<MainContent />
// 		</>
// 	);
// }

// export default App;

// import React, { useState, useEffect } from 'react';

const App = () => {
	const [showSplash, setShowSplash] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSplash(false);
		}, 1000); // 4 seconds

		return () => clearTimeout(timer); // Cleanup the timer
	}, []);

	return (
		<div className="flex items-center justify-center ">
			{showSplash ? (
				<div className="h-screen flex items-center justify-center text-4xl font-bold  ">
					{" "}
				</div>
				// <div> </div>
			) : (
				<div>
					<Header />
					<Socialmedia />
					<MainContent />
					<br />
					{/* <Footer/> */}
				</div>
			)}
		</div>
	);
};

export default App;
