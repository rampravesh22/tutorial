import { useGoogleLogin } from "@react-oauth/google";

const App = () => {
	const login = useGoogleLogin({
		onSuccess: (tokenResponse) => console.log(tokenResponse),
	});
	return (
		<>
			<div className="h-screen bg-gray-200 w-full flex justify-center items-center">
				<div className="bg-white h-64 w-96 rounded-md justify-center flex">
					<button
						className="bg-blue-600 w-40 m-auto text-white py-2 rounded"
						onClick={login}
					>
						Login
					</button>
				</div>
			</div>
		</>
	);
};

export default App;
