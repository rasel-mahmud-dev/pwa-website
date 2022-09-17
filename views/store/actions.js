import ACTION_TYPES from "./types";
import apis from "../apis";



export const fetchAllPosts = (dispatch) => {
	apis.get("/api/posts").then(res => {
		if (res.status === 200) {
			dispatch({
				type: ACTION_TYPES.FETCH_ALL_POSTS,
				payload: res.data.posts
			})
		}
	}).catch(ex => {
		console.log(ex.message)
	})
}


// export const fetchPortfolioCachedPosts = (dispatch) => {
// 	apis.get("/api/posts/cache").then(res => {
// 		if (res.status === 200) {
// 			dispatch({
// 				type: ACTION_TYPES.FETCH_PORTFOLIO_CACHE_POSTS,
// 				payload: res.data.posts
// 			})
// 		}
// 	}).catch(ex => {
// 		console.log(ex.message)
// 	})
// }


// export const fetchPost = (id, callBack) => {
// 	api.get(`/api/post?id=${id}`).then(response => {
// 		if (response.status === 200) {
// 			callBack(null, response.data)
// 		} else {
// 			callBack("fail", null)
// 		}
// 	}).catch(ex => {
// 		callBack(ex, null)
// 	})
// }


export const fetchCurrentAuth = (dispatch) => {
	
	(async function () {
		try {
			let token = ""
			if (typeof window !== "undefined") {
				token = window.localStorage.getItem("token")
			}
			
			let r = await apis.get("/api/auth/fetch_auth")
			if (r.status === 200) {
				dispatch && dispatch({
					type: ACTION_TYPES.SET_ADMIN,
					payload: r.data.user
				})
			}
		} catch (ex) {
			console.log(ex.message)
		}
	}())
}

export const handleLoginAction = (dispatch, data, cb) => {
	apis.post("/api/auth/login", {email: data.email, password: data.password}).then(r=>{
		if(r.status === 201){
			dispatch({
				type: ACTION_TYPES.SET_ADMIN,
				payload: r.data.user,
			})
			console.log(r.data)
			if(r.data.token){
				localStorage.setItem("token", r.data.token)
			}
			cb(null, r.data)
			
		} else {
			cb(r.data.message, null)
		}
	}).catch(ex=>{
		console.log(ex)
		// cb(ex.response.data.message, null)
	})
}


// export const resetCachePortfolioPosts = (dispatch, cb) => {
// 	(async function () {
// 		try {
// 			let r = await apis.get("/api/posts/reset-cache")
// 			if (r.status === 200) {
// 				dispatch && dispatch({
// 					type: ACTION_TYPES.FETCH_PORTFOLIO_CACHE_POSTS,
// 					payload: r.data.posts
// 				})
// 				cb(r.data.posts.length + " Items Cached")
// 			}
// 		} catch (ex) {
// 			cb(ex.message)
// 		}
// 	}())
// }

//
// export const fetchVisitors = (dispatch) => {
//
// 	(async function () {
// 		try {
// 			let r = await apis.get("/api/visitor")
// 			if (r.status === 200) {
// 				dispatch({
// 					type: ACTION_TYPES.FETCH_VISITORS,
// 					payload: r.data
// 				})
// 			}
// 		} catch (ex) {
//
// 		}
// 	}())
// }


// export const storeVisitor = () => {
// 	(async function () {
// 		try {
// 			let r = await apis.post("/api/visitor")
// 		} catch (ex) {
// 		}
// 	}())
// }