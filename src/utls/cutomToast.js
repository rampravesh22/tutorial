import toast from "react-hot-toast";

const toastC = {
	success: (msg) => {
		return toast.success(msg, { className: "border-2 border-green-500" });
	},

	error: (msg) => {
		return toast.error(msg, { className: "border-2 border-red-500" });
	},
};

export default toastC;
