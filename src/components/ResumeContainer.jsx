import React, { useEffect, useState } from "react";
import Resume from "./Resume";
import { supabase } from "../supabaseClient";

const ResumeContainer = () => {
	const [resumeData, setResumeData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await supabase
				.from("resume")
				.select("*")
				.single();

			if (error) console.log("Error fetching resume:", error);
			else {
				console.log(data);
				setResumeData(data);
			}
		};

		fetchData();
	}, []);

	return (
		<div>{resumeData ? <Resume data={resumeData} /> : <p>Loading...</p>}</div>
	);
};

export default ResumeContainer;
