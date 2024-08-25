import React from "react";
import Subheading from "../shared-components/Subheading";
import Heading from "../shared-components/Heading";

const TechnicalSkills = () => {
	return (
		<div>
			<Heading>Technical Skills</Heading>
			<Subheading subHeading="Language" value={"Python, Javascript"} />
			<Subheading
				subHeading="Python Scripting"
				value={"Web Scripting, Django, Beautiful Soup, Pandas, NumPy"}
			/>
			<Subheading
				subHeading="Web Developments"
				value={"HTML, CSS, Redux Toolkit, Node.js, Express.js, REST APIs"}
			/>
			<Subheading
				subHeading="IT Constructs:"
				value={"Data Structures and Algorithms, OOPS, DBMS"}
			/>
			<Subheading
				subHeading="WebDev Tools"
				value={" VSCode, Postman, GitHub, Git"}
			/>
			<Subheading
				subHeading="Framework"
				value={"ReactJS, Tailwind CSS, Bootstrap Framework, Django"}
			/>
			<Subheading subHeading="Database" value={"MySql, MongoDB"} />
			<Subheading subHeading="DevOps Tool" value={"Docker"} />
		</div>
	);
};

export default TechnicalSkills;
