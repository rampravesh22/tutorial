import React from "react";
import Subheading from "./Subheading";
import Heading from "./Heading";

const Projects = () => {
	return (
		<div>
			<Heading>Projects</Heading>
			<Subheading
				subHeading="Hospital Management System"
				value={
					"Created a Django-based application for efficient hospital management. Features include patient management, appointment scheduling, and doctor addition. Utilized Django for backend, Bootstrap for responsive design, and JavaScript/CSS for interactivity. Demonstrated skills in full-stack development and healthcare system optimization"
				}
			></Subheading>
			<Subheading
				subHeading="E-Notes"
				value={
					"Developed a Django-based application for managing notes with features to add, edit, and authenticate users. Utilized Django for the backend, Bootstrap for responsive design, and JavaScript/CSS for enhanced functionality. Demonstrated expertise in full-stack development and user authentication systems"
				}
			></Subheading>
			<Subheading
				subHeading="Ecommerce App"
				value={
					"Developed an E-commerce website using Django for both front-end and back-end. Implemented product management, user authentication, and basic cart functionalities. Gained experience in Python, Django framework, database management, full-stack development, and improved problem-solving and collaboration skills"
				}
			></Subheading>
		</div>
	);
};

export default Projects;
