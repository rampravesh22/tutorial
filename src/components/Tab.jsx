import { useState } from "react";
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
				<div className="flex justify-center mt-10">
					{tabs.map((tab) => {
						return (
							<button
								onClick={() => {
									handleTabChange(tab.value);
								}}
								key={tab.label}
								className={` transition-all border-black px-6  ${
									tab.value === activeTab && tab.value == 0
										? "border-t border-e"
										: tab.value === tabs.length - 1 && tab.value === activeTab
										? "border-t border-s "
										: ""
								}`}
							>
								{tab.label}
							</button>
						);
					})}
				</div>
				<div className="flex mt-10 flex-col px-10 pb-5">
					<h1 className="font-bold">{tabs[activeTab].title}</h1>
					<p>{tabs[activeTab].desscription}</p>
				</div>
			</div>
		</>
	);
};

export default Tab;
