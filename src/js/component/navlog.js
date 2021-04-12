import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const NavLog = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-dark">
			<Link to="/home">
				<span className="navbar-brand mb-0 h1 text-white display-4 pt-3">
					<img
						src="https://cdn.discordapp.com/attachments/700786837156790405/824846063206662154/star-wars-logo.png"
						alt=""
						width="160"
						height=""
						className="d-inline-block align-text-top"
					/>
				</span>
			</Link>

			<div className="navbar-nav mr-auto form-inline font-weight-bolder">
				<Link to="/characters">
					<div className="nav-item ">
						<a className="nav-text mr-3" href="#">
							{" "}
							Characters{" "}
						</a>
					</div>
				</Link>
				<Link to="/planets">
					<div className="nav-item">
						<a className="nav-text" href="#">
							{" "}
							Planets
						</a>
					</div>
				</Link>
			</div>
		</nav>
	);
};
