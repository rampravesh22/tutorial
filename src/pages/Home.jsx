import React, { useContext, useEffect } from "react";
import axiosCreate from "../services/GlobalApi";
import { GlobalContext } from "../context/ContextProvider";
import axios from "axios";

const Home = () => {
	const { setGenres, loading, setLoading } = useContext(GlobalContext);
	const getData = async () => {
		setLoading(true);
		console.log(import.meta.env.VITE_api_key);
		try {
			const res = await axios.get(
				`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_api_key}`
			);
			console.log(res);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	if (loading) {
		return (
			<div className="w-12 mt-12 m-auto h-12 border-2 rounded-full border-black border-e-white animate-spin"></div>
		);
	}
	return (
		<div className="grid grid-cols-4 h-full">
			<div className="genere bg-red-400 h-full md:block hidden">genere</div>
			<div className="game-list bg-blue-500 col-span-4  md:col-span-3">
				list
			</div>
		</div>
	);
};

export default Home;
