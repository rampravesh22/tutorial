import { Button, Link } from "@nextui-org/react";
import React from "react";
import { Link as RouteLInk } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div className="h-screen gap-12 flex-col flex justify-center items-center">
				<div className="text-3xl border px-5 py-2 rounded-lg">Home Page</div>
				<div className="flex gap-4">
					<Button as={RouteLInk} to={"/login"} color="primary">
						Login
					</Button>
					<Button as={RouteLInk} to={"/register"} color="secondary">
						Register
					</Button>
				</div>
			</div>
		</>
	);
};

export default Home;
