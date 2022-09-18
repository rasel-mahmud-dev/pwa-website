import React from "preact/compat";
import {useReducer} from "preact/hooks";
import ACTION_TYPES from "./types";

import AppContext from "./AppContext"


const initialState = {
	filteredPosts: [],
	searchText: "",
	searchPosts: null,
	filterBy: "All",
	portfolioCachePosts: null,
	isShowBackdrop: false,
	post: null,
	categories: null,
	posts: null,
	isDark: false,
	postDetails: null,
	auth: null,
	allPosts: [],
	projects: []
};



function reducer(state, action) {

	switch (action.type) {
		
		case ACTION_TYPES.SET_CATEGORIES:
			return {
				...state,
				categories: action.payload
			}
		
		case ACTION_TYPES.FETCH_ALL_POSTS:
			return {
				...state,
				posts: action.payload
			}
		
		case ACTION_TYPES.TOGGLE_THEME:
			return {
				...state,
				isDark: action.payload
			}
			
		// case ACTION_TYPES.FETCH_PORTFOLIO_CACHE_POSTS:
		// 	return {
		// 		...state,
		// 		portfolioCachePosts: action.payload
		// 	}
		
		case ACTION_TYPES.SET_ADMIN:
			return {
				...state,
				auth: action.payload
			}
		
		// case ACTION_TYPES.FETCH_POST_DETAILS:
		// 	return {
		// 		...state,
		// 		postDetails: action.payload
		// 	}
		//
		// case ACTION_TYPES.SET_FILTERED_POSTS:
		// 	return {
		// 		...state,
		// 		filteredPosts: action.payload.filter,
		// 		filterBy: action.payload.filterBy,
		// 	}
		//
		// case ACTION_TYPES.FETCH_VISITORS:
		// 	return {
		// 		...state,
		// 		visitors: action.payload
		// 	}
		//
		// case ACTION_TYPES.TOGGLE_BACKDROP:
		// 	return {
		// 		...state,
		// 		isShowBackdrop : !state.isShowBackdrop
		// 	}
		//
		// case ACTION_TYPES.SET_SEARCH_TEXT:
		// 	return {
		// 		...state,
		// 		searchText : action.payload
		// 	}
		// case ACTION_TYPES.SET_SEARCH_POSTS:
		// 	return {
		// 		...state,
		// 		searchText : action.payload.searchText,
		// 		searchPosts: action.payload.searchPosts
		//
		// 	}
		
		default:
			return state;
	}
}


const AppProvider = (props) => {
	
	const [contextState, contextDispatch] = useReducer(reducer, initialState);
	
	return (
		<AppContext.Provider value={{state: contextState, dispatch: contextDispatch}}>
			{props.children}
		</AppContext.Provider>
	)
}


export default AppProvider
