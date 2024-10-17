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
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/authActions";
import toast from "react-hot-toast";

export default function Header() {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const dispatch = useDispatch();

	const menuItems = [
		"Profile",
		"Dashboard",
		"Login",
		"Help & Feedback",
		"Log Out",
	];

	const handleLogout = () => {
		const toastId = toast.loading("Logging out, please wait.");
		setTimeout(() => {
			dispatch(logout());
			toast.success("Logout successful", { id: toastId });
			navigate("/login");
		}, 1000);
	};
	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} className="bg-gray-900 text-white">
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<NavLink
						to="/"
						className="font-bold text-inherit font-nunito md:text-3xl text-base"
					>
						Cinemas
					</NavLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link
						as={NavLink}
						to="/watchlist"
						color=""
						className="text-white"
						href="#"
					>
						Watch List
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				{!isAuthenticated ? (
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
						<Button
							as={NavLink}
							onClick={handleLogout}
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
