import React , {useState} from 'react'


const style = {
    width : 200,
    marginBottom:5
}
function Storage() {
        const [user , setUser] = useState("")
        const [result , setResult] = useState("")
        const [key , setKey] = useState("")
        const save_data = (e) => {
            e.preventDefault()
            window.localStorage.setItem(key , user)
        }
        const get_data  = (e) => {
            e.preventDefault()
            setResult(window.localStorage.getItem(key))
        }

        const delete_data  = (e) => {
            e.preventDefault()
            window.localStorage.removeItem(key)
            setResult("")
        }
  return (
    <>
    <h1>{result}</h1>
        <div style={{ margin: "auto" , width:"50%" , display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column" , backgroundColor:"#0E22BA" , height:400}}>
        <input onChange={e  => { setUser(e.target.value) }} type="text" placeholder="enter your data" className='form-form-control' />
        <input onChange={e  => { setKey(e.target.value) }} type="text" placeholder="enter your key" className='form-form-control' />

        <br/>
        <input type="submit" onClick={save_data} value={"Set"}  style={style} className="btn btn-warning" />
        <input type="submit" onClick={get_data} value={"Get"}  style={style} className="btn btn-warning"/>
        <input type="submit" onClick={delete_data} value={"Remove"}  style={style} className="btn btn-danger"/>


        </div>
    </>
  )
}

export default Storage
