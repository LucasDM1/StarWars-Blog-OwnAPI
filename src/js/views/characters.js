import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row">
				<h1 className="text-white ml-3">Characters </h1>
				<div className="col text-right">
					<Link to="/home">
						<button className="btn btn-outline-danger mt-2" style={{ float: "right" }}>
							Go back
						</button>
					</Link>
				</div>
			</div>

			<div className="card-columns">
				{store.people.map((character, index) => {
					return (
						<div key={index}>
							<div className="card bg-dark text-white">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title mb-2">{character.name}</h5>
									<p className="card-text m-0">
										Gender:
										{" " + character.gender}
									</p>
									<p className="card-text m-0">
										Hair color:
										{" " + character.hair_color}
									</p>
									<p className="card-text m-0">
										Eye color:
										{" " + character.eye_color}
									</p>
									<Link to={"/characters/" + index}>
										<button className="btn btn-outline-primary mt-2">Learn more!</button>
									</Link>

									<button
										className="btn btn-outline-danger mt-2"
										onClick={() => (
											actions.getFavCharacters(index),
											console.log(store.favorites, store.favorites.length)
										)}
										style={{ float: "right" }}>
										<i className="fab fa-jedi-order" />
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
