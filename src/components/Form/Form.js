import React from 'react';
import Button from '../Button/Button';
import './form.css'


function Form (props) {
    return (
        <>

        <form className='form-cls' style={{ backgroundColor:props.bg }}>

            <img alt='logo'  className='img-cls' src={'/images/google.png' } />
            <input className='input-cls' type="text" placeholder='Username'  />
            <input className='input-cls'  type="password" placeholder='password'  />
            <input className='input-cls'  type="email" placeholder='Email'  />
            <Button />
        </form>
        </>
    )
}


export default Form