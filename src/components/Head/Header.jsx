import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else {
  //   setUsername(data.firstName)
  // }
  
  
  const logOutUser = () =>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className='header'>
        <h1>Hello <br/> <span>username✌️</span></h1>
        <button onClick={logOutUser}className='btn'>Log Out</button>
    </div>
  )
}

export default Header