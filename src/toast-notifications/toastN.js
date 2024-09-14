import toast from "react-hot-toast";

const success = (message) => {
	toast.success(message, { className: "border-2 border-green-600" });
};
const error = (message) => {
	toast.error(message, { className: "border-2 border-red-600" });
};

const toastN = { success, error };
export default toastN;
