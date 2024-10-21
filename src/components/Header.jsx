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

import { Link as RLink } from "react-router-dom";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} className="bg-gray-900 text-white">
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Link as={RLink} to="/" className="font-bold text-inherit">
						Blog
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="#">
						Features
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link as={RLink} to={"/add-blog"} aria-current="page">
						Add Blog
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
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu className="bg-gray-900">
				<NavbarItem>
					<Link color="" href="#">
						Features
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						Customers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="" href="#">
						Integrations
					</Link>
				</NavbarItem>
			</NavbarMenu>
		</Navbar>
	);
}
