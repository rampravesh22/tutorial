import React from "react";
import Subheading from "../shared-components/Subheading";
import Heading from "../shared-components/Heading";
import { useGlobalContext } from "../../context/useGlobalContext";

const Projects = () => {
	const { data } = useGlobalContext();
	return (
		<div>
			<Heading>Projects</Heading>
			{data.projects.map((project, index) => (
				<Subheading
					key={index}
					subHeading={project.title}
					value={project.description}
				/>
			))}
		</div>
	);
};

export default Projects;
