import React from "react";
import { Link } from "react-router-dom";

export const Carousel = () => {
	return (
		<div className="container-fluid h-100">
			<div className="row justify-content-center">
				<div className="col-8">
					<div id="carouselExampleIndicators" className="carousel slide rounded" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
							<li data-target="#carouselExampleIndicators" data-slide-to="1" />
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active w-100">
								<Link to="/characters">
									<img
										src="https://wallpaperaccess.com/full/1920263.jpg"
										className="d-block w-100 rounded"
										alt="..."
										style={{ width: "2000px", height: "450px" }}
									/>
									<div className="carousel-caption d-none d-md-block shadow-lg bg-transparent">
										<h3>Star Wars Characters</h3>
										<p className="shadowp">
											Click here to learn more about your favorite Star Wars characters
										</p>
									</div>
								</Link>
							</div>
							<div className="carousel-item w-100">
								<Link to="/planets">
									<img
										src="https://images.hdqwalls.com/wallpapers/death-star-planet-star-wars-nt.jpg"
										className="d-block w-100 rounded"
										alt="..."
										style={{ width: "2000px", height: "450px" }}
									/>
									<div className="carousel-caption d-none d-md-block">
										<h3>Planets</h3>
										<p className="shadowp">
											Click here to explore all the facinating planets that the Star Wars Universe
											has
										</p>
									</div>
								</Link>
							</div>
						</div>
						<a
							className="carousel-control-prev"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
