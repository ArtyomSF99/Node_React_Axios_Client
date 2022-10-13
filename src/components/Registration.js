import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Registration = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
  const[emailDirty, setEmailDirty] = useState(false)
  const[passwordDirty, setPasswordDirty] = useState(false)
  const[firstNameDirty, setFirstNameDirty] = useState(false)
  const[lastNameDirty, setLastNameDirty] = useState(false)
  const[emailError, setEmailError] = useState('Email не может быть пустым')
  const[passwordError, setPasswordError] = useState('Пароль не может быть пустым')
  const[firstNameError, setFirstNameError] = useState('Имя не может быть пустым')
  const[lastNameError, setLastNameError] = useState('Фамилия не может быть пустым')
  const[formValid, setFormValid] = useState(false)
  const[serverMessage, setServerMessage] = useState('')

    async function createUser() {
        await axios.post('http://localhost:8000/auth/registration',{
           "email": email,
           "password":password 
        }).then(res => {
          
          console.log(res)
         })
        }
        
        
          const emailHandler = (e) =>{
            setEmail(e.target.value)
              setEmailError('')
          }
        
          const passwordHandler = (e) => {
            setPassword(e.target.value)
              setPasswordError('')
        }
        
          

         const login = event => {
            event.preventDefault()  
            createUser()
            console.log(email)
        }
    return(
        <div className="login">
            
            <h1 style={{textAlign: 'center'}}>Регистрация</h1>
            <form onSubmit={login}>
            
            <div>
            
            <input className='myinput' onChange={e=> emailHandler(e)} value={email} name='email' type='text' placeholder='Введите ваш email...'/>
            </div>
            <div>
           
            <input className='myinput' onChange={e=> passwordHandler(e)} value={password} name='password' type='password' placeholder='Введите ваш пароль...'/>
            </div>
            <div>

            </div>
            <div className='myinput'>
            <button className='myinput' type='submit'>Зарегистрироваться</button>
            </div>
            
            </form>
            
            <Link to={`/Login`} >
            <button className='myinput'>Войти</button>
            </Link>
        </div>
    )
}


export default Registration;