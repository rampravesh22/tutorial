import { useState } from "react";
import Card from "./Card";
import Projecjs from "./projects";
import List from "./LIst";
const ProjectTypes = ["all", "web", "ios", "android"];
function App() {
	const [data, setData] = useState("");
	const [filterProjects, setFilterProjects] = useState(Projecjs);
	const filterProj = (type) => {
		if (type === "all") {
			setFilterProjects(Projecjs);
		} else {
			const data = Projecjs.filter((project) => {
				return project.type === type;
			});
			setFilterProjects(data);
		}
	};

	return (
		<div className="flex gap-12">
			<div className="w-[10%] h-[100vh]  bg-black text-white sticky">
				<ul className="flex flex-col items-center gap-5 mt-10">
					{ProjectTypes.map((type, index) => {
						return (
							<List
								type={type}
								filterProj={filterProj}
								key={index}
							/>
						);
					})}
				</ul>
			</div>
			<div className="flex gap-7 mt-10 flex-wrap w-[90%] m-auto justify-center">
				{filterProjects.map((project, index) => {
					return <Card {...project} key={index} />;
				})}
			</div>
		</div>
	);
}

export default App;
