import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid" id="login">
			<div className="row">
				<div className="col-6 pl-5 mb-5">
					<h1 id="yellow">Learn about the amazing universe of Star Wars with this database</h1>
					<p className="text-white">
						All troops will debark for ground assault. Prepare to target the main generator. Rouge Two, are
						you all right? Yeah. Im with you, Rouge Leader. Well set harpoon. Ill cover for you. Coming
						around. Watch that cross fire, boys. Set for position three. Steady. Stay tight and low. Hobbie,
						Ive been hit! Put Captain Solo in the cargo hold. Artoo! Artoo! Where have you been? Turn
						around, you wooly...! Hurry, hurry! Were trying to save Han from the bounty hunter! Well, at
						least your still in one piece! Look what happened to me! Oh, no! Chewie, theyre behind you!
						Artoo says the chances of survival are seven hundred seventy-five...to one. Actually, Artoo has
						been known to make mistakes...from time to time. Oh, dear, oh, dear. Dont worry about Master
						Luke. Im sure hell be all right. Hes quite clever, you know...for a human being. Excuse me, sir.
						Might I inqu-... Excuse me, sir. Might I inqu-... Yes, sir? Do you know where Commander
						Skywalker is? I haven t seen him. It s possible he came in through the south entrance. It s
						possible? Why don t you go find out? It s getting dark out there. Yes, sir. Excuse me, sir.
						Might I inquire what s going on? Why not?
						{/* Impossible man. Come along, Artoo, lets find Princess Leia. Between ourselves, I think Master Luke
                        is in considerable danger. Now will you move along, little fella? We are got a lot of work to do.
                        No! No, no! Stay and help you, I will. Find your friend, hmm? I m not looking for a friend, I m
                        looking for a Jedi Master. Oohhh. Jedi Master. Yoda. You seek Yoda. You know him? Mmm. Take you to
                        him, I will. Yes, yes. But now, we must eat. Come. Good food. Come. Come, come. Stay here and watch */}
						after the camp, Artoo.
					</p>
				</div>
				<div className="col-6 d-flex justify-content-center">
					<div className="col-3"> </div>
					<div className="card text-center col-6 mt-5 p-0 bg-dark">
						<div className="card-header">
							<h2 className="text-white">Login</h2>
						</div>
						<div className="card-body pb-2">
							<input className="rounded mb-3" type="text" placeholder="username" />
							<br />
							<input className="rounded mb-3" type="password" placeholder="password" />
						</div>
						<div className="card-footer ">
							<button className="btn btn-outline-warning ml-1" type="button">
								Log In
							</button>
							<button className="btn btn-outline-warning ml-1" type="button">
								Register
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
