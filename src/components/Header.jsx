import React from "react";
import { Navbar, Button } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<div>
			<div>
				<div>
					<div>Movie Management App</div>
				</div>
				<div>
					{isAuthenticated ? (
						<>
							<Button as={Link} to="/search">
								Search
							</Button>
							<Button as={Link} to="/watchlist">
								Watchlist
							</Button>
							<div>
								<Button auto flat as={Link} to="/logout">
									Logout
								</Button>
							</div>
						</>
					) : (
						<div>
							<Link auto flat as={Link} to="/login">
								Login
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
