import React, { useContext } from "react";
import { useGlobalContext } from "../context/useGlobalContext";
import icons from "../assets/socialIcons";
import IconComponent from "./IconComponent";

const social_media = [
	{
		name: "github",
		link: "https://www.github.com",
	},
	{
		name: "linkedin",
		link: "https://www.linkedin.com",
	},
	{
		name: "leetcode",
		link: "https://www.leetcode.com",
	},
	{
		name: "twitter",
		link: "https://www.twitter.com",
	},
];
const PersonalDetails = () => {
	const { data } = useGlobalContext();
	console.log(data);

	return (
		<>
			<div className="text-center mb-4 flex justify-between">
				<div className="flex items-center gap-3">
					<h3 className="print:text-3xl font-bold">{"Rampravesh Chaudhari"}</h3>
					<span className="flex items-center gap-1">
						{social_media.map((social, index) => {
							if (social.link) {
								return (
									<a href={social.link} key={index}>
										<IconComponent iconName={social.name} />
									</a>
								);
							}
						})}
					</span>
				</div>
				<div className="flex text-xs  flex-col items-end ">
					<a
						href={`mailto:${data.email}`}
						className="text-blue-500 hover:underline"
					>
						{data.email}
					</a>
					<a
						href={`tel:${data.phone}`}
						className="text-blue-500 hover:underline"
					>
						{data.phone}
					</a>
				</div>
			</div>
		</>
	);
};

export default PersonalDetails;
