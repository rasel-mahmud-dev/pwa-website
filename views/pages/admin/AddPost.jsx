import React from "preact/compat";
import { useState } from "preact/hooks";

import { handleLoginAction } from "../../store/actions";
import useStore from "../../store/useStore";
import apis from "../../apis";

const AddPost = () => {
  const [app, dispatch] = useStore();
  
  const router = {}
  
  const [state, setState] = useState({
    postData: {
      slug: "asd",
      title: "asd",
      summary: "asd",
      markdown: "sad",
      cover: "sad",
      isPortfolio: false,
      tags: []
    },
    errorMessage: "",
    httpReqProcess: false
  });
  
  const {postData, errorMessage, httpReqProcess} = state
	
	function handleChange(e){
		let updatePostData = {...postData}
		
		if(e.target.name === "isPortfolio"){
			updatePostData[e.target.name] = e.target.checked
		} else if(e.target.name === "tags") {
			updatePostData[e.target.name] = e.target.values
		}else {
			updatePostData[e.target.name] = e.target.value
		}
		setState({...state, postData: updatePostData})
	}
	
  async function handleSubmit(e) {
	  e.preventDefault();
	  let errorMessage = ""
	  let isComplete = true
	  for (let postDataKey in postData) {
		  if(postDataKey !== "isPortfolio") {
			  if (!postData[postDataKey]) {
				  isComplete = false;
				  errorMessage = "Please give " + postDataKey;
			  }
		  }
	  }
	
	  console.log(isComplete)
	
	  if(!isComplete){
		  setState({
			  ...state,
			  errorMessage: errorMessage
		  })
		
		  return;
	  }
	
	  setState({
		  ...state,
		  errorMessage: "",
		  httpReqProcess: true
	  })
	
	
	  if(router?.query?.id){
		  apis.patch("/api/post", { id: router?.query?.id,...postData}).then(({status, data}) => {
			  console.log(status, data)
		  }).catch(ex => {
			
		  })
		
		
	  } else {
		  apis.post("/api/post", {...postData}).then(({status, data}) => {
			  console.log(status, data)
		  }).catch(ex => {
			
		  })
	  }
	  
  }

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleSubmit}>
					
					<label htmlFor="" className="label" >Post Slug</label>
					<input
                        type="text"
                        name="slug"
                        className="input"
                        value={postData.slug}
                        placeholder="post slug"
                        onChange={handleChange}
                    />
					<br/>
					<br/>
					
					<label htmlFor="" className="label">Post Title</label>
					<input
                        type="text"
                        name="title"
                        className="input"
                        value={postData.title}
                        placeholder="Enter Post title"
                        onChange={handleChange}
                    />
					<br/>
					<br/>
					
					<label htmlFor="" className="label ">Cover photo</label>
					<input
                        type="text"
                        name="cover"
                        className="input"
                        value={postData.cover}
                        placeholder="Enter cover photo"
                        onChange={handleChange}
                    />
					<br/>
					<br/>
					<div className="flex items-center gap-x-2">
						<input
                            type="checkbox"
                            name="isPortfolio"
                            className=""
                            id="isPortfolio"
                            checked={postData.isPortfolio}
                            onChange={handleChange}
                        />
					<label htmlFor="isPortfolio" className="label ">Is Show on Portfolio </label>
					</div>
					<br/>
					<br/>
					
					{/*<MultiInput*/}
                    {/*    defaultValues={postData.tags}*/}
                    {/*    placeholder="Tags"*/}
                    {/*    name="tags"*/}
                    {/*    label="Tags"*/}
                    {/*    className="!flex-col"*/}
                    {/*    inputClass="!label"*/}
                    {/*    errorMessage=""*/}
                    {/*    labelClass="!mb-1"*/}
                    {/*    onChange={handleChange}/>*/}
					
	        
					<br/>
					<br/>
					<label htmlFor="" className="label ">Content</label>
					<textarea
                        name="markdown"
                        className="input "
                        value={postData.markdown}
                        placeholder="Enter Post content"
                        onChange={handleChange}
                    ></textarea>
					
					<button className={`btn ${httpReqProcess ? "btn-disable": ""} `} type="submit">
						{router?.query?.id ? "Update Post" : "Add Post"}
					</button>
					
	            </form>
      </div>
    </div>
  );
};

export default AddPost;
