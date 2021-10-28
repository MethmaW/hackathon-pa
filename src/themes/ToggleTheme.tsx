import React, { useState, useEffect } from "react";

const ToggleTheme = () => {
	const [ isDarkTheme, setIsDarkTheme ] = useState(true);

	const handleTheme = () => {
		if (isDarkTheme) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	useEffect(
		() => {
			handleTheme();
		},
		[ isDarkTheme ]
	);

	return (
		<button onClick={() => setIsDarkTheme(!isDarkTheme)}>
			Change theme to {isDarkTheme ? "light" : "dark"}
		</button>
	);
};

export default ToggleTheme;
