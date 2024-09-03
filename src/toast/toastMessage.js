import toast from "react-hot-toast";

const success = (message) => {
	toast.success(message, { className: "border border-green-400" });
};

const error = (message) => {
	toast.error(message, { className: "border border-red-400" });
};

const toastM = {
	error,
	success,
};

export default toastM;
