import React, {useEffect} from "preact/compat";
import apis from "../apis";
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
            <li  className="title" onClick={()=>setExpand(!expand)}>{title}</li>
    
            { expand && (
                <div className="para">
                    <p>{html}</p>
                </div>
            ) }
        </div>
    )
}

export default HomePage;