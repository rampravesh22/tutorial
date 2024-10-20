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

	const handleLogout = () => {
		const toastId = toast.loading("Logging out, please wait.");
		setTimeout(() => {
			dispatch(logout());
			toast.success("Logout successful", { id: toastId });
			navigate("/login");
		}, 1000);
		setIsMenuOpen(false);
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
						onClick={() => setIsMenuOpen(false)}
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
				<NavbarItem>
					<Link
						as={NavLink}
						to="/booked-movies"
						className=" bg-gray-200 px-5 py-2 rounded-md text-black"
						href="#"
					>
						Booked Movies
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
							className="text-white md:flex hidden "
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
				{!isAuthenticated ? (
					<>
						<NavbarMenuItem>
							<Link
								as={NavLink}
								to="/login"
								size="lg"
								className="text-white "
								onClick={() => setIsMenuOpen(false)}
							>
								Login
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<Link
								as={NavLink}
								to="/register"
								size="lg"
								className="text-white "
								onClick={() => setIsMenuOpen(false)}
							>
								Register
							</Link>
						</NavbarMenuItem>
					</>
				) : (
					<>
						<NavbarMenuItem>
							<Link
								as={NavLink}
								to="/watchlist"
								size="lg"
								className="text-white "
								onClick={() => setIsMenuOpen(false)}
							>
								Watchlist
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<Link
								as={NavLink}
								to="/booked-movies"
								className="  text-white  rounded-full"
								onClick={() => setIsMenuOpen(false)}
							>
								Booked Movies
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<Button
								onClick={handleLogout}
								size="sm"
								color="danger"
								className=""
							>
								Logout
							</Button>
						</NavbarMenuItem>
					</>
				)}
			</NavbarMenu>
		</Navbar>
	);
}
