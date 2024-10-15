import React from "react";
import { Link, Spacer } from "@nextui-org/react";
import { Github, Linkedin, Twitter } from "lucide-react";

const AppFooter = () => {
	return (
		<div className="bg-gray-900">
			<div>
				<div className="justify-center items-center">
					<div className="flex flex-col items-center">
						<div>My Awesome Website</div>
						<div className="flex gap-4 mb-10 mt-10">
							<Link
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github color="white" size={24} />
							</Link>
							<Spacer x={0.5} />
							<Link
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin color="white" size={24} />
							</Link>
							<Spacer x={0.5} />
							<Link
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Twitter color="white" size={24} />
							</Link>
						</div>
					</div>
				</div>
				<Spacer y={1} />
				<div className="flex justify-center text-white">
					<div className="flex justify-center gap-5">
						<Link href="/about" color="white">
							About
						</Link>
						<Spacer x={1} />
						<Link href="/contact" color="white">
							Contact
						</Link>
						<Spacer x={1} />
						<Link href="/privacy" color="white">
							Privacy Policy
						</Link>
					</div>
				</div>
				<Spacer y={1} />
				<div className="justify-center items-center pb-10">
					<div className="text-center text-white">
						© 2024 My Awesome Website. All rights reserved.
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppFooter;
