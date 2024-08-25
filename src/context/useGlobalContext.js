import { useContext } from "react";
import { GlobalContext } from "./ContextProvider";

export const useGlobalContext = () => {
	return useContext(GlobalContext);
};
