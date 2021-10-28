import React, { Suspense } from "react";
import { Router } from "react-router-dom";
import { Navbar, Loader } from "./components";
import { history } from "./store/configureStore";
import { Routes } from "./router/index";
import ToggleTheme from "./themes/ToggleTheme";

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Router history={history}>
				<div>
					<div>
						<Navbar />
					</div>
				</div>
			</Router>
		</Suspense>
	);
}

export default App;
