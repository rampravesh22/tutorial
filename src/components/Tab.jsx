import React, { useState } from "react";

const Tab = () => {
	const [activeTab, setActiveTab] = useState(0);
	const tabs = [
		{
			label: "TAB-1",
			value: 0,
			title: "Content for tab-1 ",
			desscription: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
					doloribus dolorem provident officia amet adipisci? Accusantium
					laudantium beatae ipsa expedita?`,
		},
		{
			label: "TAB-2",
			value: 1,
			title: "Content for tab-2",
			desscription: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
					doloribus dolorem provident officia amet adipisci? Accusantium
					laudantium beatae ipsa expedita?`,
		},
		{
			label: "TAB-3",
			value: 2,
			title: "Content for tab-3",
			desscription: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
					doloribus dolorem provident officia amet adipisci? Accusantium
					laudantium beatae ipsa expedita?`,
		},
	];
	const handleTabChange = (value) => {
		setActiveTab(value);
	};
	return (
		<>
			<h1 className="text-center bg-zinc-800 text-white text-2xl py-2 ">
				Tab Management
			</h1>
			<div className="w-[400px] shadow border-black rounded flex items-center-center flex-col m-auto border mt-20">
				<button className="flex justify-center mt-10 gap-4">
					{tabs.map((tab) => {
						return (
							<div
								onClick={() => {
									handleTabChange(tab.value);
								}}
								key={tab.label}
								className={`border transition-all border-zinc-800 px-6 rounded-md ${
									tab.value === activeTab ? "bg-zinc-800 text-white " : ""
								}`}
							>
								{tab.label}
							</div>
						);
					})}
				</button>
				<div className="flex mt-10 flex-col px-10 pb-5">
					<h1 className="font-bold">{tabs[activeTab].title}</h1>
					<p>{tabs[activeTab].desscription}</p>
				</div>
			</div>
		</>
	);
};

export default Tab;
