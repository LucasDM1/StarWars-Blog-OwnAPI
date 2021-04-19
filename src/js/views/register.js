import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = () => {
	const { store, actions } = useContext(Context);

	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const history = useHistory();

	return (
		<div className="container-fluid w-100 h-100 pt-5 pb-5 text-white" id="login">
			<div className="row justify-content-center">
				<div className="col-6">
					<div className="card text-center bg-dark">
						<div className="card-header">
							<h2 className="text-white" id="yellow">
								Register
							</h2>
						</div>
						<div className="card-body text-left text-white">
							<form>
								<div className="row">
									<div className="col-6 mb-3">
										<label htmlFor="name" className="form-label">
											Name
										</label>
										<input
											type="text"
											value={name}
											onChange={e => setName(e.target.value)}
											className="form-control"
											id="name"
											required
										/>
									</div>
									<div className="col-6 mb-3">
										<label htmlFor="lastname" className="form-label">
											Lastname
										</label>
										<input
											type="text"
											value={lastname}
											onChange={e => setLastname(e.target.value)}
											className="form-control"
											id="lastname"
											required
										/>
									</div>
								</div>

								<div className="mb-3">
									<label htmlFor="email" className="form-label">
										Email address
									</label>
									<input
										type="email"
										value={email}
										onChange={e => setEmail(e.target.value)}
										className="form-control"
										id="email"
										required
									/>
								</div>

								<div className=" mb-3">
									<label htmlFor="Username" className="form-label">
										Username
									</label>
									<input
										type="text"
										value={user}
										onChange={e => setUser(e.target.value)}
										className="form-control"
										id="username"
										required
									/>
								</div>
								<div className=" mb-3">
									<label htmlFor="exampleInputPassword1" className="form-label">
										Password
									</label>
									<input
										type="password"
										value={password}
										onChange={e => setPassword(e.target.value)}
										className="form-control"
										id="exampleInputPassword1"
										required
									/>
								</div>
							</form>
							{store.registerProblem == null ? null : (
								<div className="alert alert-danger" role="alert">
									{store.registerProblem}
								</div>
							)}
						</div>
						<div className="card-footer">
							<div className="btn-group mx-2" role="group" aria-label="First group">
								<button
									type="submit"
									onClick={() => actions.handleRegister(name, lastname, email, user, password)}
									className="btn btn-outline-success ml-3">
									Register
								</button>
							</div>
							<Link to="/">
								<button type="button" className="btn btn-outline-danger">
									Go to Log in
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
