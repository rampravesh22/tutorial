// UploadImage.js
import React, { useEffect, useState } from "react";
import supabase from "./supabaseClient";

function UploadImage() {
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);
	const [imagePreview, setImagePreview] = useState(null);
	const [fileName, setFileName] = useState("");

	const handleImageUpload = async (e) => {
		try {
			if (image) {
				setLoading(true);
				let fileNmae = image.name.replace(/[\s:]/g, "_");
				"dkdkdkd".split();
				const { data, error } = await supabase.storage
					.from("project-images")
					.upload(`projects/${fileNmae}`, image);

				if (error) {
					console.error("Error uploading image:", error);
					setLoading(false);
				} else {
					console.log("Image uploaded:", data);
					setLoading(false);
					setImage(null);
					setFileName("");
					setImagePreview(null);
				}
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};
	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
		setFileName(e.target.files[0].name.replace(/[\s:]/g, "_"));
		const selectedFile = e.target.files[0];
		if (selectedFile) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result);
			};
			reader.readAsDataURL(selectedFile);
		}
	};

	// useEffect(() => {}, []);

	return (
		<>
			<div className="px-20 my-10 mb-5 flex flex-col">
				<label
					htmlFor="imageLabel"
					className="border gap-2 h-10  flex items-center "
				>
					<span className="bg-zinc-900 text-white px-6 py-2 rounded-md">
						Upload
					</span>
					<span className="flex-grow py-3 text-xs">
						{fileName ? fileName : "no file selected"}
					</span>
				</label>
				<input
					id="imageLabel"
					onChange={handleImageChange}
					className="border hidden border-gray-600 file:bg-red-600 h-12 file:h-12 rounded-md file:rounded-md file:text-white text-center"
					type="file"
				/>
				<button
					onClick={handleImageUpload}
					className="bg-blue-600 flex gap-2 items-center text-white self-end px-6 py-2 mt-5 rounded-md"
				>
					{loading ? (
						<span className="size-4 rounded-full border-white animate-spin border-e-2 border-e-black"></span>
					) : (
						""
					)}
					Upload
				</button>
			</div>
			<div className="flex justify-center flex-col rounded-md w-3/4 border-4 border-purple-500 m-auto">
				<span className="self-center bg-purple-600 uppercase font-roboto-mono text-white w-full text-center text-xl">
					Preview File
				</span>
				{imagePreview && <img src={imagePreview} alt="" className="" />}
			</div>
		</>
	);
}

export default UploadImage;
