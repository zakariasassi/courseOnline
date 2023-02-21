import React,{useState , useEffect} from 'react';

import Form from '../../components/Form/Form';

function Login () {
    
    const [username  , setUsername ] = useState("zakaria");
    const [password , setPassword] = useState("123456");



    useEffect( () => {
        console.log(username);
        console.log(password);
    });
    // const printing = (e) => {
    //     e.preventDefault();
    //     console.log(username)
    //     console.log(password)

    // }

 

    return (

        <>
        <h1> Login</h1>
        <form className='form-cls'>
            <img alt='logo'  className='img-cls' src={'/images/google.png' } />

            <input className='input-cls' type="text" placeholder='Username' onChange={ e => { setUsername(e.target.value)  } }  />
            <input className='input-cls'  type="password" placeholder='password' onChange={ e => { setPassword(e.target.value)  } }  />


            <input type="submit"  className="btn-class" value="Login"  />
        </form>

        <Form bg="red" />
        </>
    )
}


export default Login