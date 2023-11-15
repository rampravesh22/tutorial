import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineUpload } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
	const [file, setFile] = useState(null);
	const [previewFile, setPreviewFile] = useState(null);
	const [alert, setAlert] = useState(false);
	const [deleteAlert, setDeleteAlert] = useState(false);
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [uploadingLoader, setUploadingLoader] = useState(false);

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
			setUploadingLoader(true);
			const formData = new FormData();
			formData.append("image-name", file);
			const res = await axios.post("http://localhost:3000/upload", formData);

			setTimeout(() => {
				setImages([...images, res.data]);
				setFile(null);
				setPreviewFile(null);
				setUploadingLoader(false);
				setAlert(true);
			}, 3000);

			setTimeout(() => {
				setAlert(false);
			}, 6000);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		const getImages = async () => {
			setLoading(true);
			try {
				const res = await axios.get("http://localhost:3000/images");
				setImages(res.data);
				setTimeout(() => {
					setLoading(false);
				}, 1000);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};

		getImages();
	}, []);
	const deleteHandle = async (id) => {
		await axios.delete(`http://localhost:3000/delete-image/${id}`);
		setImages((preState) => preState.filter((image) => image._id !== id));
		setDeleteAlert(true);
		setTimeout(() => {
			setDeleteAlert(false);
		}, 2000);
	};
	return (
		<>
			{/* alerts */}
			<div
				className={`alert ${
					alert ? "translate-y-0" : "translate-y-[-120%]"
				} bg-green-600 text-white rounded-sm transition-all left-[50%] translate-x-[-50%] fixed alert-success flex font-bold justify-center mt-2 w-[90%] mx-auto `}
			>
				File Upload successful
			</div>
			<div
				className={`alert ${
					deleteAlert ? "translate-y-0" : "translate-y-[-120%]"
				} bg-green-600 text-white rounded-sm transition-all left-[50%] translate-x-[-50%] fixed alert-success flex font-bold justify-center mt-2 w-[90%] mx-auto `}
			>
				File Deleted successful
			</div>
			<div className="h-screen flex flex-col">
				<input
					type="file"
					className="hidden"
					id="file"
					required
					onChange={hanldeOnChangeInputFile}
				/>
				{/* top element */}
				<div className="flex justify-center items-center">
					<div className="self-center flex gap-3 flex-col items-center p-4 mt-4 ">
						<label
							htmlFor="file"
							className="bg-white flex items-center gap-2 cursor-pointer active:ring focus:bg-red-500 self-center border border-black px-7 py-2 mt-4 rounded"
						>
							<AiOutlineUpload />
							Select
						</label>
						<button
							onClick={handleUploadBtn}
							disabled={file ? false : true}
							className="self-center  disabled:cursor-auto bg-violet-600 mt-4 px-7 py-2 text-white rounded hover:bg-violet-900 transition-all"
						>
							{uploadingLoader ? (
								<div className="flex justify-center items-center gap-3">
									<span className="loading loading-spinner loading-xs"></span>
									Uplaoding..
								</div>
							) : (
								"Upload"
							)}
						</button>
					</div>

					{/* preview image */}
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
				</div>

				{/* show images */}
				<div className=" w-[90%] m-auto mt-4">
					{images.length > 0 && (
						<div className="grid grid-cols-2  gap-3 md:grid-cols-4 lg:grid-cols-5 p-4">
							{images.map((image) => {
								if (loading) {
									return (
										<div
											key={image._id}
											className="skeleton rounded-md border h-48"
										></div>
									);
								}
								return (
									<div
										key={image._id}
										className=" h-48 relative rounded-md border-black hover:ring group  hover:ring-violet-600 hover:rounded-none border flex items-center overflow-hidden transition-all"
									>
										<img
											src={`http://localhost:3000/${image.imagePath}`}
											alt=""
										/>
										<button
											onClick={() => deleteHandle(image._id)}
											className="absolute  hidden translate-x-[-50%] left-[50%] group-hover:flex rounded-md text-3xl bg-red-600 hover:bg-red-700 group-hover:translate-y-0 translate-y-[-300%]  px-6 py-2 text-white shadow-xl"
										>
											<MdDeleteOutline />
											Delete
										</button>
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
