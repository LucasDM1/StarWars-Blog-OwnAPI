import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharactersDet = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 ">
					<h1 className="display-4 text-white font-weight-bold ml-3">{store.people[params.id].name}</h1>

					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
						className="col-md-6 float-md-left mb-3 ms-md-3"
						alt="Responsive image"
					/>

					<p className="text-white col-md-6 float-md-right">
						Opress hutt ansion aqualish utapau. Antonio moff leia gungan carondian chirrpa sifo-dyas himoran
						utapau. Twilek organa quermian dexter. Luke winter nute anakin gavyn skywalker drall organa.
						Daala crynyd abrion gerb ackbar bibble tib. Gricho clawdite cato seerdon darth kenobi. Skywalker
						-lom rahn yavin zuggs xexto dorvalla. Senex kast biggs chazrach bertroff tatooine crynyd
						fortuna. Mygeeto zam yavin trioculus.
					</p>
				</div>
			</div>
			<hr className="my-4 bg-white" />
			<div className="row text-white">
				<div className="col-2 justify-content-center">
					<p>
						<strong>Name</strong>
					</p>
					<p> {store.people[params.id].name}</p>
				</div>
				<div className="col-2 justify-content-center">
					<p>
						<strong>Birth Year</strong>{" "}
					</p>
					<p>{store.people[params.id].birth_year}</p>
				</div>
				<div className="col-2 justify-content-center">
					<p>
						<strong>Gender</strong>{" "}
					</p>
					<p>{store.people[params.id].gender}</p>
				</div>
				<div className="col-2 justify-content-center">
					<p>
						<strong>Height</strong>{" "}
					</p>

					<p>{store.people[params.id].height}</p>
				</div>
				<div className="col-2 justify-content-center">
					<p>
						<strong>Hair Color</strong>
					</p>
					<p>{store.people[params.id].hair_color}</p>
				</div>
				<div className="col-2 justify-content-center">
					<p>
						{" "}
						<strong>Eye Color</strong>{" "}
					</p>
					<p>{store.people[params.id].eye_color}</p>
				</div>
			</div>
			<div className="row">
				<Link to="/characters">
					<span className="btn btn-outline-danger btn-lg ml-3 my-3" href="#" role="button">
						Back to Characters
					</span>
				</Link>
			</div>
		</div>
	);
};
