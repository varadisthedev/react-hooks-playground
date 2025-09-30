import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts,setPosts]=useState({})
    const [id,setId]=useState(1)
    const [idFromButtonClick,setIdFromButtonClick]=useState(1)

    const handleClick=()=>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

        
    },[idFromButtonClick])
    return (
    <>
        <input type='text' value={id} onChange={e=>{setId(e.target.value)}} class="text-2xl"></input>
        <button type='button' onClick={handleClick}>fetch post</button>
        <div>
            {posts.title}
        </div>
        {/* <ul>
            {posts.map(post => (
            <li key={post.id}>{post.title}</li>
            ))}
        </ul> */}
    </>
  )
}

export default DataFetching