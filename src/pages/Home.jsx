import React, { useContext, useEffect } from "react";
import axiosCreate from "../services/GlobalApi";
import { GlobalContext } from "../context/ContextProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
	// const api_key = import.meta.env.VITE_api_key;
	const api_key = "87be5013e52646bcb417300f8725f7f6";
	const { setGenres, loading, setLoading } = useContext(GlobalContext);
	const getData = async () => {
		const options = {
			method: "GET",
			url: "https://rawg-video-games-database.p.rapidapi.com/games",
			headers: {
				"X-RapidAPI-Key":
					"182cf17d78msha0051da9f591707p1d1fc7jsn25f9ada7876d",
				"X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
			},
		};
		setLoading(true);
		try {
			const res = await axios.request(options);
			console.log(res.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
			const toastId = toast.loading("Somthing went wrong!", {});
			toast.dismiss(toastId);
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
		<>
			<Toaster />
			<div className="grid grid-cols-4 h-full">
				<div className="genere bg-red-400 h-full md:block hidden">
					genere
				</div>
				<div className="game-list bg-blue-500 col-span-4  md:col-span-3">
					list
				</div>
			</div>
		</>
	);
};

export default Home;
