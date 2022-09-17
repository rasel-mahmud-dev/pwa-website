

import AppContext from "./AppContext";
import {useContext} from "preact/hooks";


const useStore = () => {
	const {state, dispatch} = useContext(AppContext)
	
	return [state, dispatch]
};

export default useStore;