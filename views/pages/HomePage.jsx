import React, {useEffect} from "preact/compat";
import {fetchAllPosts} from "../store/actions";
import useStore from "../store/useStore";

import {useRouter} from "preact-router"
import {useState} from "preact/hooks";


const HomePage = () => {
    
    const [{matches}] = useRouter()
    
    const [{posts}, dispatch] = useStore();
    
    
    useEffect(()=>{
        fetchAllPosts(dispatch, {categoryName: matches.categoryName})
    }, [matches.categoryName])
    
    
    return (<div className="container">
        { posts && posts.map(post=>(
             <RenderPost post={post} />
        )) }

  </div>);
};


function RenderPost(props){
    
    const {title, html} = props.post;
    
    const [expand, setExpand] = useState(false)
    
    return (
        <div className="each-post">
            <li  className="title" onClick={()=>setExpand(!expand)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                {title}
            </li>
    
            { expand && (
                <div className="para">
                    <p>{html}</p>
                </div>
            ) }
        </div>
    )
}

export default HomePage;