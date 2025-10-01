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
        <div className='bg-gray-900 border-1 rounded-2xl p-5 '>
            <div className='flex justify-center items-center text-2xl my-5 space-x-4'>
                    <input
                    type='text'
                    placeholder='enter post id'
                    value={id}
                    onChange={e => {
                        setId(e.target.value);
                    }}
                    className=" font-bold  text-blue-900 border-2 border-gray-400 rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></input>


                <button
                type='button'
                onClick={handleClick}
                className="bg-blue-800 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-500 transition duration-300"
                >
                fetch post
                </button>

            </div>

            <div className='text-xl text-white'>
                {posts.title}
            </div>
            {/* <ul>
                {posts.map(post => (
                <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
    }

    export default DataFetching