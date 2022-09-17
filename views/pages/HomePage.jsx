import React, {useEffect} from "preact/compat";
import apis from "../apis";
import {fetchAllPosts} from "../store/actions";
import useStore from "../store/useStore";

const HomePage = () => {
    
    const [{posts}, dispatch] = useStore();
    
    useEffect(()=>{
        
        fetchAllPosts(dispatch)
        
    }, [])
    
    console.log(posts)
    
    return (<div className="container">

            <h1>Home page asd sad as-sad</h1>
        
        { posts && posts.map(post=>(
            <div>
                <li>{post.title}</li>
            </div>
        )) }

  </div>);
};

export default HomePage;