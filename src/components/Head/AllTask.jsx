import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData, setUserData] = useContext(AuthContext)
  return (
    <div className='alltask'>
        <div className='alltask-header'> 
            <h2>Employee Name</h2>
            <h3>New Task</h3>
            <h5>Active Task</h5>
            <h5>Completed</h5>
            <h5>Failed</h5>
        </div>
        <div className='alltask-container'>
         {userData.map(function(el,idx){
            return  <div key={idx} className='alltask-box'> 
            <h2 className='inbox1'>{el.firstName}</h2>
            <h3 className='inbox2'>{el.taskCount.newTask}</h3>
            <h5 className='inbox3'>{el.taskCount.active}</h5>
            <h5 className='inbox4'>{el.taskCount.completed}</h5>
            <h5 className='inbox5'>{el.taskCount.failed}</h5>
        </div>
        })}
        </div>
       
       

    </div>
  )
}

export default AllTask