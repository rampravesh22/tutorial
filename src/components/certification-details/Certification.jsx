import React from "react";
import Heading from "../shared-components/Heading";
import CertificationSubheading from "./CertificationSubheading";

const Certification = () => {
	return (
		<div>
			<Heading>Certification</Heading>
			<CertificationSubheading
				certification={"Python for everybody"}
				portal={"Coursera Certification"}
			/>
			<CertificationSubheading
				certification={"React from zero to hero"}
				portal={"Udemy Certification"}
			/>
			<CertificationSubheading
				certification={"Django fundamentals"}
				portal={"Coursera Certification"}
			/>
		</div>
	);
};

export default Certification;
