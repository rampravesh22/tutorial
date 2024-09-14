import React, { useState } from "react";
import cities from "../../constant/cities";
import states from "../../constant/states";
import axios from "axios";
import toast from "react-hot-toast";
import toastN from "../../toast-notifications/toastN";
import { BASE_URL } from "../../api/api";

const firstName = "random";
const lastName = "chaudhari";
const AddStudent = () => {
	const [loading, setLoading] = useState(false);
	const [fullName, setFullName] = useState(firstName + " " + lastName);
	const [email, setEmail] = useState(`${firstName}@gmail.com`);
	const [phone, setPhone] = useState("8388383883");
	const [gender, setGender] = useState("male");
	const [subjects, setSubjects] = useState([]);
	const [about, setAbout] = useState(
		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita dolorem consequuntur sequi voluptatem perferendis sint nemo unde voluptate eos, iste quaerat provident eligendi veritatis. Recusandae laboriosam ."
	);
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [color, setColor] = useState("#0014D9");
	const [range, setRange] = useState(23);

	const handleGenderChange = (e) => {
		setGender(e.target.value);
	};

	const handleSubjectsChange = (e) => {
		if (e.target.checked) {
			setSubjects((preState) => {
				return [...preState, e.target.value];
			});
		} else {
			setSubjects((preState) =>
				preState.filter((subject) => {
					return subject !== e.target.value;
				})
			);
		}
	};
	console.log("hello world");

	const hadnleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const toastId = toast.loading("Adding Student, please wait.");

			await axios.post(`${BASE_URL}/students`, {
				fullName,
				email,
				phone,
				gender,
				subjects,
				about,
				city,
				state,
				dateOfBirth,
				range,
				color,
			});

			setTimeout(() => {
				toast.dismiss(toastId);
				toastN.success("Student added successfuly.");
				setLoading(false);
			}, 1200);
		} catch (error) {
			toastN.error(error.message);
			setLoading(false);
		}
	};

	return (
		<div>
			<form
				action=""
				className="flex flex-col gap-3 p-2 text-slate-400"
				autoComplete="off"
				onSubmit={hadnleFormSubmit}
			>
				{/* full name */}
				<div>
					<input
						type="text"
						placeholder="Full Name"
						className="w-full border-2 h-12 p-2  rounded-md"
						maxLength={200}
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
					/>
				</div>
				{/* email */}
				<div>
					<input
						type="email"
						placeholder="Email"
						className="w-full border-2 h-12 p-2  rounded-md"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						maxLength={200}
					/>
				</div>
				{/* phone */}
				<div>
					<input
						type="text"
						placeholder="Phone"
						className="w-full border-2 h-12 p-2  rounded-md"
						value={phone}
						maxLength={10}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div className="w-full border-2 p-2 rounded-md">
					<label htmlFor="date">Date of Birth</label>
					<input
						className="focus:outline-none  focus:shadow-md px-3 py-1 rounded-md"
						type="date"
						onChange={(e) => setDateOfBirth(e.target.value)}
					/>
				</div>
				{/* gender */}
				<div className="flex text-slate-400 gap-4 border-2 p-2 items-center rounded-md">
					<div className="text-slate-400">Gender</div>
					<div className="flex  items-center text-xs gap-2">
						<label htmlFor="male">Male</label>
						<input
							type="radio"
							name="gender"
							id="male"
							value="male"
							className="w-full border-2 h-12 p-2  rounded-md"
							defaultChecked
							onChange={handleGenderChange}
						/>
					</div>
					<div className="flex  items-center gap-2 text-xs">
						<label htmlFor="female">Female</label>
						<input
							type="radio"
							name="gender"
							id="male"
							value="female"
							onChange={handleGenderChange}
						/>
					</div>
					<div className="flex text-sm items-center gap-2 ">
						<label htmlFor="other">Other</label>
						<input
							type="radio"
							name="gender"
							id="other"
							value="other"
							onChange={handleGenderChange}
						/>
					</div>
				</div>
				{/* subjects */}
				<div className="flex p-2 border-2 gap-4 rounded-md">
					<div className="">Subjects</div>
					<div className="flex items-center gap-2 text-xs">
						<label htmlFor="python" className="">
							Python
						</label>
						<input
							onChange={handleSubjectsChange}
							type="checkbox"
							name="subjects"
							id="python"
							value="python"
						/>
					</div>
					<div className="flex items-center gap-2 text-xs">
						<label htmlFor="java" className="">
							Java
						</label>
						<input
							onChange={handleSubjectsChange}
							type="checkbox"
							name="subjects"
							id="java"
							value="java"
						/>
					</div>
					<div className="flex items-center gap-2 text-xs">
						<label htmlFor="cpp" className="">
							CPP
						</label>
						<input
							onChange={handleSubjectsChange}
							type="checkbox"
							name="subjects"
							id="cpp"
							value="cpp"
						/>
					</div>
					<div className="flex items-center gap-2 text-xs">
						<label htmlFor="javascript" className="">
							JAVASCRIPT
						</label>
						<input
							onChange={handleSubjectsChange}
							type="checkbox"
							name="subjects"
							id="javascript"
							value="javascript"
						/>
					</div>
					<div className="flex items-center gap-2 text-xs">
						<label htmlFor="ai" className="">
							AI
						</label>
						<input
							onChange={handleSubjectsChange}
							type="checkbox"
							name="subjects"
							id="ai"
							value="ai"
						/>
					</div>
				</div>
				{/* about students */}
				<div>
					<textarea
						name="about"
						value={about}
						id="about"
						placeholder="About"
						className="border-2 p-2 w-full h-32 rounded-md"
						maxLength={2000}
						onChange={(e) => setAbout(e.target.value)}
					></textarea>
				</div>
				{/* select city */}
				<div className="flex border-2 p-2 rounded-md">
					<select
						name="city"
						id="city"
						className="focus:border-none focus:outline-none w-full"
						defaultValue="Gorakhpur"
						onChange={(e) => {
							setCity(e.target.value);
						}}
					>
						s
						<option value="" disabled>
							Select city
						</option>
						{cities.map((city) => (
							<option
								className="focus:border-none focus:outline-none"
								key={city}
								value={city}
							>
								{city}
							</option>
						))}
					</select>
				</div>
				{/* states */}
				<div className="p-2 border-2 rounded-md">
					<select
						name="state"
						id="state"
						defaultValue="Uttar Pradesh"
						className="w-full focus:outline-none"
						onChange={(e) => setState(e.target.value)}
					>
						<option disabled value={""}>
							Select State
						</option>
						{states.map((state) => (
							<option value={state} key={state}>
								{state}
							</option>
						))}
					</select>
				</div>
				<div className="w-full border-2 p-2 flex items-center gap-5">
					<label htmlFor="color">Select Random Color</label>
					<input
						onChange={(e) => setColor(e.target.value)}
						type="color"
						name="color"
						id="color"
						value={color}
						className="w-24 h-12 rounded-md"
					/>
				</div>
				<div className="w-full p-2 border-2">
					<label htmlFor="range">Select Range</label>
					<input
						type="range"
						name="range"
						id=""
						className="w-full"
						value={range}
						min={0}
						max={100}
						onChange={(e) => setRange(e.target.value)}
					/>
				</div>
				<button
					disabled={loading}
					type="submit"
					className="bg-zinc-700 disabled:bg-zinc-600 text-white py-2 rounded-md mt-2"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddStudent;
