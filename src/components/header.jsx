import { Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import React from "react";
import { MDBCardImage } from "mdb-react-ui-kit";
import Registration from "../pages/Registration";

const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<p className="navbar-brand my-2 h1">Voting System</p>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto d-flex align-items-center">
							<li className="nav-item">
								<Link className="nav-link active" to="/">
									Home
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link active" to="/About">
									About
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link active" to="/Contact">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<Link
					type="button"
					// id="login_button"
					className="btn btn-primary  text-nowrap me-3"
					to="/Registration"
				>
					Sign up
				</Link>
				<MDBCardImage
					style={{ width: "70px" }}
					className="img-fluid rounded-circle border border-dark border-3 me-3"
					src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
					alt="Generic placeholder image"
					fluid
				/>
			</nav>
		</div>
	);
};

export default Header;
