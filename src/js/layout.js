import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Characters } from "./views/characters";
import { Planets } from "./views/planets";
import { Home } from "./views/home";
import { CharactersDet } from "./views/charactersDetails";
import { PlanetsDet } from "./views/planetsDetails";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Carousel } from "./views/carousel";
import { NavLog } from "./component/navlog";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<NavLog />
							<Home />
						</Route>

						<Route exact path="/home">
							<Navbar />
							<Carousel />
							<Footer />
						</Route>
						<Route exact path="/characters">
							<Navbar />
							<Characters />
							<Footer />
						</Route>
						<Route exact path="/characters/:id">
							<Navbar />
							<CharactersDet />
							<Footer />
						</Route>
						<Route exact path="/planets">
							<Navbar />
							<Planets />
							<Footer />
						</Route>
						<Route exact path="/planets/:id">
							<Navbar />
							<PlanetsDet />
							<Footer />
						</Route>
						<Route>
							<h5 id="yellow">These aren&apos;t the droids you&apos;re looking for</h5>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
