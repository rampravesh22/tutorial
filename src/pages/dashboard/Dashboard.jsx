import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/ContextProvider";
import axios from "axios";
import { API_URL } from "../../api/api";
import { Listbox, ListboxItem, User } from "@nextui-org/react";

const Dashboard = () => {
	const { token, setToken } = useContext(GlobalContext);
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const getUsers = async () => {
			try {
				console.log(token);
				const { data } = await axios.get(`${API_URL}/user/allusers`, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				});
				console.log(data);

				setTimeout(() => {
					setUsers(data.users);
				}, 2000);
			} catch (error) {
				console.log(error);
			}
		};

		getUsers();
	}, []);

	return (
		<ul className="flex flex-col items-stretch list-none gap-2 p-5">
			{users.length > 0 ? loading : null}
		</ul>
	);
};

export default Dashboard;
const score = 35;
const grade = score > 90 ? "A" : score < 90 && score > 80 ? "B" : "fail";

console.log(grade);
