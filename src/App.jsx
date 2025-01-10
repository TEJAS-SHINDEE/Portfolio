import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./ui/component/header.jsx";
import { Socialmedia } from "./ui/component/socialmedia.jsx";
import MainContent from "./ui/component/mainContent.jsx";

const App = () => {

	const [showSplash, setShowSplash] = useState(false);     
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSplash(false);
		}, 4000); 

		return () => clearTimeout(timer); 
	}, []);

	return (
		<div className=" flex items-center justify-center ">
			{showSplash ? (
				<div className="h-screen flex items-center justify-center text-4xl font-bold  animate-scaleInOut">
					Tejas Shinde
				</div>
			) : (
				<div>
					<Header />
					<Socialmedia />
					<MainContent />
				</div>
			)}
		</div>
	);
};

export default App;
