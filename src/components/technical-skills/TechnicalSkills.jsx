import React from "react";

import Heading from "../shared-components/Heading";
import TechnicalSubheading from "./TechnicalSubheading";

const skills = [{}];

const TechnicalSkills = () => {
	return (
		<div>
			<Heading>Technical Skills</Heading>
			<TechnicalSubheading subHeading="Language" value={"Python, Javascript"} />
			<TechnicalSubheading
				subHeading="Python Scripting"
				value={"Web Scripting, Django, Beautiful Soup, Pandas, NumPy"}
			/>
			<TechnicalSubheading
				subHeading="Web Developments"
				value={"HTML, CSS, Redux Toolkit, Node.js, Express.js, REST APIs"}
			/>
			<TechnicalSubheading
				subHeading="IT Constructs:"
				value={"Data Structures and Algorithms, OOPS, DBMS"}
			/>
			<TechnicalSubheading
				subHeading="WebDev Tools"
				value={" VSCode, Postman, GitHub, Git"}
			/>
			<TechnicalSubheading
				subHeading="Framework"
				value={"ReactJS, Tailwind CSS, Bootstrap Framework, Django"}
			/>
			<TechnicalSubheading subHeading="Database" value={"MySql, MongoDB"} />
			<TechnicalSubheading subHeading="DevOps Tool" value={"Docker"} />
		</div>
	);
};

export default TechnicalSkills;
