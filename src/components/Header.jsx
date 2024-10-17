import React from "react";
import { Navbar, Button } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<div>
			<Navbar isBordered>
				<Navbar.Brand>
					<div>Movie Management App</div>
				</Navbar.Brand>
				<Navbar.Content>
					{isAuthenticated ? (
						<>
							<Navbar.Link as={Link} to="/search">
								Search
							</Navbar.Link>
							<Navbar.Link as={Link} to="/watchlist">
								Watchlist
							</Navbar.Link>
							<Navbar.Item>
								<Button auto flat as={Link} to="/logout">
									Logout
								</Button>
							</Navbar.Item>
						</>
					) : (
						<Navbar.Item>
							<Button auto flat as={Link} to="/login">
								Login
							</Button>
						</Navbar.Item>
					)}
				</Navbar.Content>
			</Navbar>
		</div>
	);
};

export default Header;
