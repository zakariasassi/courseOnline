import React , {useState , useEffect} from 'react'
import './posts.css'
import axios from 'axios'


function Posts() {
    const URL = "https://jsonplaceholder.typicode.com/posts"
    const [posts , setPosts] = useState([])
    
    async  function Get_Posts_From_API () {
        await axios.get(URL).then( (res) => { setPosts(res.data) } ).catch((err) => {console.log(err)})
    }

    useEffect( () => {
        Get_Posts_From_API()
    } , [] )
 

  return (
    <>
    <div class="container">
     <div className='row'>

    {
        posts.map((element , key) => {
            return(
                    <div className='col'>
                    <div className="card  " style={{width: "18rem" , margin:20 }}>
                    <img src={"https://i.imgur.com/fCIFZRU.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">{element.body}</p>
                        <a href="#" className="btn btn-warning">Read More</a>
                    </div>
                 </div>
                    </div>
          
            )
        } )
    }
    </div>
    </div>
    </>
  )
}

export default Posts
