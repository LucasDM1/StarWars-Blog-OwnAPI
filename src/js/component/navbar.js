import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-dark mb-3">
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

			<div className="nav-item dropdown">
				<button
					className="btn btn-outline-warning dropdown-toggle"
					href="#"
					id="navbarDropdown"
					type="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					<span className="badge">{store.favorites.length}</span>
					Favorites
				</button>
				<div className="dropdown-menu dropdown-menu-right bg-dark" aria-labelledby="navbarDropdown">
					{store.favorites.length > 0 ? (
						store.favorites.map((fav, index) => {
							return (
								<span
									key={index}
									onClick={() => actions.RemoveFav(index)}
									className="dropdown-item justify-content-center text-white">
									{fav.name + " "}
									<i className="fas fa-trash" />
								</span>
							);
						})
					) : (
						<span className="dropdown-itemjustify-content-center text-white pl-3"> (empty) </span>
					)}
				</div>
			</div>
			<div className="nav-item button">
				<button
					className="btn btn-outline-danger"
					onClick={() => {
						actions.LogOut();
						history.push("/");
					}}
					type="button">
					Log out
				</button>
			</div>
		</nav>
	);
};
