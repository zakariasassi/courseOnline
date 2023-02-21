import React , {useState , useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Counter() {
    const [counter , setCounter] = useState(0)



    const notify = (counter) => toast(`Worng pssword ${counter}`  , {
        draggable: true,
        theme: "dark",
    });




    
    const countup = (e) => {
        e.preventDefault()
        setCounter(counter + 1)
        notify(counter)
        console.log(counter)
    }

    const countdown = (e) => {
        e.preventDefault()
        setCounter(counter - 1)
        console.log(counter)
    }

    useEffect(() => {
        console.log("inside useEffect")
        return (() => {
        })
    },[])
  return (
    <>
    <div style={{ width:"60%" , display:"flex" , flexDirection:"column" , alignItems:'center' , justifyContent:'center' , margin:"auto" , position:'relative' , top:200}}>
    <h1> { counter } </h1>
    <div style={{ display:'flex' , flexDirection:"row"  } }>
    <button  className='btn btn-primary' onClick={countup} style={{ width:200 , margin:10  }}> increase + </button>
    <button className='btn btn-primary' onClick={countdown} style={{ width:200 , margin:10  }}> decrees - </button>
    <button className='btn btn-danger' onClick={notify} style={{ width:200 , margin:10  }}>  Show Notifcation </button>

    </div>
    <ToastContainer />
    </div>
    </>
  )
}

export default Counter
