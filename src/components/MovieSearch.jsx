import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Search, X, Loader2 } from "lucide-react";
import api from "../utils/api";
import { Button } from "@nextui-org/react";

const MovieSearch = () => {
	const [query, setQuery] = useState("");
	const [searchedMovies, setSearchedMovies] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const dispatch = useDispatch();
	const resultsRef = useRef(null);
	const searchTimeoutRef = useRef(null);

	// Debounced search function
	const debouncedSearch = async (searchTerm) => {
		if (!searchTerm.trim()) {
			setSearchedMovies([]);
			setIsSearching(false);
			return;
		}

		setIsSearching(true);
		try {
			const response = await api.get(`/movies?q=${searchTerm}`);
			setSearchedMovies(response.data);
		} catch (error) {
			console.error("Search failed:", error);
		} finally {
			setIsSearching(false);
		}
	};

	// Handle input change with debouncing
	const handleInputChange = (e) => {
		const value = e.target.value;
		setQuery(value);

		// Clear any existing timeout
		if (searchTimeoutRef.current) {
			clearTimeout(searchTimeoutRef.current);
		}

		// Set new timeout
		searchTimeoutRef.current = setTimeout(() => {
			debouncedSearch(value);
		}, 500); // 500ms delay
	};

	const clearSearch = () => {
		setQuery("");
		setSearchedMovies([]);
		setIsSearching(false);
		if (searchTimeoutRef.current) {
			clearTimeout(searchTimeoutRef.current);
		}
	};

	// Cleanup timeout on unmount
	useEffect(() => {
		return () => {
			if (searchTimeoutRef.current) {
				clearTimeout(searchTimeoutRef.current);
			}
		};
	}, []);

	// Close search results when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (resultsRef.current && !resultsRef.current.contains(event.target)) {
				clearSearch();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [resultsRef]);

	return (
		<div className="max-w-4xl mx-auto px-4 py-6">
			<div className="relative">
				<div className="relative flex items-center">
					<div className="relative flex-1">
						<input
							value={query}
							onChange={handleInputChange}
							placeholder="Search movies..."
							className="w-full px-6 py-3 pr-12 text-lg rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white/10 backdrop-blur-sm"
						/>
						<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
							{isSearching ? (
								<Loader2 size={20} className="text-gray-500 animate-spin" />
							) : (
								query && (
									<button
										type="button"
										onClick={clearSearch}
										className="p-1 hover:bg-gray-100 rounded-full transition-colors"
									>
										<X size={20} className="text-gray-500" />
									</button>
								)
							)}
						</div>
					</div>
				</div>

				{/* Search Results */}
				{searchedMovies.length > 0 && (
					<div
						ref={resultsRef}
						className="absolute w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden max-h-[70vh] overflow-y-auto z-50"
					>
						<div className="p-4 border-b border-gray-200">
							<h3 className="text-lg font-semibold text-gray-800">
								Search Results ({searchedMovies.length})
							</h3>
						</div>
						<div className="divide-y divide-gray-200">
							{searchedMovies.map((movie) => (
								<div
									key={movie.id}
									className="p-4 hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
								>
									<div className="flex items-center gap-4">
										{movie.poster_path && (
											<img
												src={`/api/placeholder/92/138`}
												alt={movie.title}
												className="w-[92px] h-[138px] rounded-lg object-cover"
											/>
										)}
										<div className="flex-1">
											<h4 className="text-lg font-semibold text-gray-800 mb-2">
												{movie.title}
											</h4>
											{movie.release_date && (
												<p className="text-sm text-gray-600">
													{new Date(movie.release_date).getFullYear()}
												</p>
											)}
											{movie.overview && (
												<p className="text-sm text-gray-600 mt-2 line-clamp-2">
													{movie.overview}
												</p>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default MovieSearch;
