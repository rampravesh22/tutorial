import React, { useState } from "react";
function FileInputComponent() {
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		file;

		if (file) {
			setSelectedFile(file);

			const reader = new FileReader();
			reader.onload = (e) => {
				const fileContents = e.target.result;
				console.log("File Contents:", fileContents);
			};
			reader.readAsText(file); // Read file as text
		} else {
			setSelectedFile(null);
			console.log("No file selected");
		}
	};

	return (
		<div className="h-screen border-2  border-red-700 flex justify-center flex-col items-center">
			<div className="space-y-3">
				<label
					htmlFor="file"
					className={`mb-5 w-full border-2 px-8 text-2xl py-2 rounded-md ${
						selectedFile
							? "bg-emerald-800 ring-1 ring-pink-600 text-white"
							: ""
					}`}
				>
					{selectedFile ? "File Selected" : "Select File"}
				</label>
				<br />
				<input
					type="file"
					id="file"
					disabled={selectedFile ? true : false}
					onChange={handleFileChange}
					className="bg-blue-700 text-white rounded-md px-2 py-1"
				/>
				{selectedFile && (
					<div className="border-2 p-3">
						<h2 className="text-2xl">File Details:</h2>
						<p>
							<span className="font-bold text-blue-700">Name:</span>
							{selectedFile.name}
						</p>
						<p>
							<span className="font-bold text-blue-700">Size</span> : (
							{`${
								selectedFile.size < 1024
									? (selectedFile.size / (1024 * 1024)).toFixed(2)
									: (selectedFile.size / (1024 * 1024 * 1024)).toFixed(
											2
									  )
							} GB`}
							)
						</p>
						<button
							type="button"
							className="self-start bg-pink-700 text-white px-8 py-2 mt-3 rounded-md text-xl"
						>
							Send
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default FileInputComponent;
