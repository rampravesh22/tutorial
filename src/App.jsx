import axios from "axios";
import { useEffect, useState } from "react";

function App() {
	const [file, setFile] = useState(null);
	const [previewFile, setPreviewFile] = useState(null);
	const [images, setImages] = useState([]);

	const hanldeOnChangeInputFile = (e) => {
		const newFile = e.target.files[0];
		setFile(e.target.files[0]);
		if (newFile) {
			const reader = new FileReader();
			reader.onload = () => {
				setPreviewFile(reader.result);
			};
			reader.readAsDataURL(newFile);
		}
	};
	const handleUploadBtn = async () => {
		try {
			const formData = new FormData();
			formData.append("image-name", file);
			const res = await axios.post("http://localhost:3000/upload", formData);
			console.log(res.data);
			setFile(null);
			setPreviewFile(null);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		const getImages = async () => {
			try {
				const res = await axios.get("http://localhost:3000/images");
				console.log(res.data);
				setImages(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getImages();
	}, [file]);
	return (
		<>
			<div className="h-screen flex flex-col">
				<input
					type="file"
					className="hidden"
					id="file"
					required
					onChange={hanldeOnChangeInputFile}
				/>
				<div className="self-center flex gap-3 items-center p-4 mt-4 ">
					<label
						htmlFor="file"
						className="bg-white cursor-pointer active:ring focus:bg-red-500 self-center border border-black px-7 py-2 mt-4 rounded"
					>
						Select
					</label>
				</div>
				{previewFile && (
					<div className="self-center flex border flex-col p-4 rounded-md bg-violet-600 ">
						{previewFile && (
							<img
								src={previewFile}
								className="h-14 object-cover  self-center "
							/>
						)}
						{file && (
							<span className="mt-3 px-3 bg-white text-black">
								{file.name.slice(0, 20)}
							</span>
						)}
						<button
							onClick={() => {
								setFile(null);
								setPreviewFile(null);
							}}
							className="text-white border border-black bg-red-600 px-3 py-1 mt-2 rounded hover:bg-red-700  self-center"
						>
							Remove
						</button>
					</div>
				)}

				<button
					onClick={handleUploadBtn}
					disabled={file ? false : true}
					className="self-center  disabled:cursor-auto bg-violet-600 mt-4 px-7 py-2 text-white rounded hover:bg-violet-900 transition-all"
				>
					Upload
				</button>
				<div className="border w-[90%] m-auto">
					{images.length > 0 && (
						<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 p-4">
							{images.map((image) => {
								return (
									<div key={image._id}>
										<img
											src={`http://localhost:3000/${image.imagePath}`}
											alt=""
										/>
									</div>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default App;
