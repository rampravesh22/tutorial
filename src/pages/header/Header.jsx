import React from "react";
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

export default function Header() {
	// const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const menuItems = [
		{
			menuName: "Profile",
			link: "/profile",
		},
		{
			menuName: "Dashboard",
			link: "/dashboard",
		},
		{
			menuName: "Logout",
			link: "/logout",
		},
	];

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			className="bg-secondary text-white"
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
					<Link href="#">Login</Link>
				</NavbarItem>
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
			</NavbarContent>
			<NavbarMenu className="bg-secondary-600 pt-10 space-y-2 text-white">
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<NavLink to={item.link} className="text-white">
							<Link
								color={item.menuName === "Logout" ? "danger" : "#fffff"}
								className={`w-full  ${
									item.menuName === "Logout" ? "" : "text-white"
								}`}
								href="/dashboard"
								size="lg"
							>
								{item.menuName}
							</Link>
						</NavLink>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
