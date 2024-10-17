import React from "react";
import { Link, Spacer } from "@nextui-org/react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useSelector } from "react-redux";

const AppFooter = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	if (isAuthenticated) {
		return (
			<div className="bg-gray-900">
				<div>
					<div className="justify-center items-center">
						<div className="flex flex-col items-center">
							<div className="text-white py-6 text-2xl">
								Movie Management App
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default AppFooter;
