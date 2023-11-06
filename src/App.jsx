import { useState } from "react";

function App() {
	const [image, setImage] = useState();

	const handleImageInput = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setImage(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<>
			<div className="h-screen flex justify-center flex-col items-center bg-slate-200">
				<input
					type="file"
					className="hidden"
					name=""
					id="image"
					onChange={handleImageInput}
				/>
				<label
					htmlFor="image"
					className="bg-blue-600 active:bg-red-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
				>
					Upload
				</label>
				{image && (
					<div className="selected-image mt-4 w-[400px] flex justify-items-center items-center overflow-hidden h-[300px] rounded-lg border shadow-lg ">
						<img src={image} alt="" className="object-cover w-full" />
					</div>
				)}
			</div>
		</>
	);
}

export default App;
