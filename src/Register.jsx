import { useForm } from "react-hook-form";

export default function App() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	console.log(watch("example")); // watch input value by passing the name of it

	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
			{/* register your input into the hook by invoking the "register" function */}
			<input
				className="border"
				placeholder="username"
				{...register("example")}
			/>

			{/* include validation with required or other standard HTML validation rules */}
			<input
				placeholder="password"
				{...register("exampleRequired", { required: true })}
			/>
			{/* errors will return when field validation fails  */}
			{errors.exampleRequired && (
				<span className="text-red-500">This field is required</span>
			)}

			<input type="submit" value="Register" />
		</form>
	);
}
