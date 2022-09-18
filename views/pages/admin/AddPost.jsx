import React, {useEffect} from "preact/compat";
import { useState } from "preact/hooks";


import useStore from "../../store/useStore";
import apis from "../../apis";
import MultiSelect from "../../components/inputs/MultiSelect";


import hljs from 'highlight.js';

import "highlight.js/styles/monokai.css"

import Quill from "quill"
import 'quill/dist/quill.snow.css';

const AddPost = () => {
  const [{categories}, dispatch] = useStore();
  
  const router = {}
	
	useEffect(()=>{
		hljs.configure({ // optionally configure hljs
			languages: ['javascript', 'ruby', 'python']
		});
		
		var quill = new Quill('#editor', {
			// debug: 'info',
			modules: {
				syntax: true,
				toolbar: [
					[{
						header: [1, 2, false]
					}],
					['bold', 'italic', 'underline', 'color'],
					['image', 'code-block', 'code']
				]
			},
			
			theme: 'snow' // or 'bubble'
		});
		
	}, [])
  
  const [state, setState] = useState({
    postData: {
      slug: "asd",
      title: "asd",
      summary: "asd",
      markdown: "sad",
	    categories: [],
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
	
	  const catNames =  postData.categories ? postData.categories.map(c=>c.name) : []
	  
	
	  if(router?.query?.id){
		  apis.patch("/api/post", { id: router?.query?.id,...postData}).then(({status, data}) => {
			  console.log(status, data)
		  }).catch(ex => {
			
		  })
			
		
	  } else {
		  apis.post("/api/post", {...postData, categories: catNames }).then(({status,  data}) => {
			  if(status === 201) {
				  setState({
					  ...state,
					  errorMessage: "",
					  httpReqProcess: false
				  })
			  }
		  }).catch(ex => {
			
		  })
	  }
	  
  }

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleSubmit}>
			
	            <div id="editor"></div>
	        
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
          
          	        <label htmlFor="" className="label ">Category</label>
	                  
	                <MultiSelect
		                value={postData.categories}
		                name="categories"
		                onChange={handleChange}
		                options={(onClick)=> categories && categories.map(cat=>(
			                      cat.subCategories ? (
			                          cat.subCategories.map(sub=>(
			                             <li onClick={()=>onClick(sub)}>{sub.name}</li>
			                          ))
			                      ) : (<li onClick={()=>onClick(cat)}>{cat.name}</li>)
			                  ))}
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
