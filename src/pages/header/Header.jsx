import React, { useContext, useState } from "react";
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
import { NavLink, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/ContextProvider";

export default function Header() {
	// const navigate = useNavigate();
	const { token, setToken } = useContext(GlobalContext);
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleLogout = () => {
		localStorage.removeItem("token");
		setToken(null);
		setIsMenuOpen(false);
		navigate("/login");
	};

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			isMenuOpen={isMenuOpen}
			className="bg-secondary-700 text-white"
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<p className="font-bold text-inherit">Auth</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						Customers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Integrations
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="/login">Login</Link>
				</NavbarItem>
				{!token ? (
					<NavLink to="/register">
						<Button
							className="bg-success-700 text-white"
							color="default"
							href="#"
							variant="flat"
						>
							Sign Up
						</Button>
					</NavLink>
				) : (
					<NavLink>
						<Button
							onClick={handleLogout}
							className="bg-danger-500 text-white"
							variant="flat"
						>
							Logout
						</Button>
					</NavLink>
				)}
			</NavbarContent>
			<NavbarMenu className="bg-secondary-900 pt-10 space-y-2 text-white">
				{token ? (
					<>
						<NavbarMenuItem>
							<Link
								as={NavLink}
								onPress={() => {
									navigate("/dashboard");
									setIsMenuOpen(false);
								}}
								size="lg"
								className="text-white  cursor-pointer"
							>
								Dashboard
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<Link
								as={NavLink}
								onPress={() => {
									navigate("/profile");
									setIsMenuOpen(false);
								}}
								size="lg"
								className="text-white cursor-pointer"
							>
								Profile
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<Button
								onClick={handleLogout}
								type="button"
								size=""
								color="danger"
							>
								Logout
							</Button>
						</NavbarMenuItem>
					</>
				) : (
					<NavbarMenuItem>
						<Link
							as={NavLink}
							onPress={() => {
								navigate("/login");
								setIsMenuOpen(false);
							}}
							size="lg"
							className="text-white cursor-pointer"
						>
							Login
						</Link>
					</NavbarMenuItem>
				)}
			</NavbarMenu>
		</Navbar>
	);
}
