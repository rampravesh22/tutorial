import React, { useContext } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const { isLogged, setIsLogged } = useContext(AuthContext);

	const menuItems = [
		"Profile",
		"Dashboard",
		"Login",
		"Help & Feedback",
		"Log Out",
	];

	const handleLogout = () => {
		setIsLogged(null);
		localStorage.setItem("token", "");
	};
	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} className="bg-gray-900 text-white">
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<NavLink to="/" className="font-bold text-inherit">
						ACME
					</NavLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link
						as={NavLink}
						to="/feedback"
						color=""
						className="text-white"
						href="#"
					>
						Help & Feedback.
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				{!isLogged ? (
					<>
						<NavbarItem className="hidden sm:flex">
							<Link as={NavLink} to="/login" className="text-white">
								Login
							</Link>
						</NavbarItem>
						<NavbarItem>
							<Button
								as={NavLink}
								to="/register"
								className="text-white"
								color="primary"
								href="#"
								variant="shadow"
							>
								Sign Up
							</Button>
						</NavbarItem>
					</>
				) : (
					<>
						<Link className="text-white" as={NavLink} to="/dashboard">
							Dashboard
						</Link>

						<Button
							as={NavLink}
							onClick={handleLogout}
							to="/register"
							className="text-white"
							color="danger"
							href="#"
							variant="shadow"
						>
							Logout
						</Button>
					</>
				)}
			</NavbarContent>
			<NavbarMenu className="bg-gray-900 text-white">
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className={`w-full ${
								index === menuItems.length - 1 ? "text-pink-600" : "text-white"
							}`}
							href="#"
							size="lg"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
