import React from "react";
import { useGlobalContext } from "../../context/useGlobalContext";
import IconComponent from "./IconComponent";

const PersonalDetails = () => {
	const { data } = useGlobalContext();

	return (
		<>
			<div className="text-center items-start mb-4 flex justify-between">
				<div className="flex items-center gap-3">
					<h3 className="print:text-3xl font-bold">{"Rampravesh Chaudhari"}</h3>
					<span className="flex items-center gap-1">
						{data.social_media.map((social, index) => {
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
					<a href={`mailto:${data.email}`} className=" hover:underline">
						{data.email}
					</a>
					<a href={`tel:${data.phone}`} className=" hover:underline">
						{data.phone}
					</a>
				</div>
			</div>
		</>
	);
};

export default PersonalDetails;
