import React from "react";
import Subheading from "../shared-components/Subheading";
import Heading from "../shared-components/Heading";

const WorkExperience = () => {
	return (
		<div>
			<Heading>Work Experience</Heading>
			<Subheading
				subHeading="Wipro (May 2022 - Present)"
				value={
					"I am a software developer with two years of experience at Wipro, where I am currently employed. My expertise lies in Python scripting and web development. I have successfully worked on various projects involving data analysis, web scraping, and creating web applications. I am proficient in using tools like Pandas, NumPy,React, NodeJs,  Django, Beautiful Soup, and Docker. I help in creating solutions that are not only efficient and reliable but also scalable to adapt to evolving business requirements."
				}
			/>
		</div>
	);
};

export default WorkExperience;
