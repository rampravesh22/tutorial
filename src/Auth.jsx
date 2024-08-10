import Signin from "./Signin";
import Signup from "./Signup";

function Auth() {
	return (
		<div className="flex flex-col gap-12 ">
			<Signup />
			<Signin />
		</div>
	);
}

export default Auth;
