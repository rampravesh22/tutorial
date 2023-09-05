export const getStorage = (key) => {
	return JSON.parse(localStorage.getItem(key));
};

export const setStorage = (data) => {
	localStorage.setItem("notes", JSON.stringify(data));
};
