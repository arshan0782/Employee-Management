import React,{ use, useContext, useState }from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle,setTaskTitle] = useState('')
  const [taskDate,setTaskDate] = useState('')
  const [taskAssign,setTaskAssign] = useState('')
  const [taskCategory,setTaskCategory] = useState('')
  const [taskDescription,setTaskDescription] = useState('')

  // const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    
      const newTask = {taskTitle, taskDate, taskCategory, taskDescription,active:false, newTask:true, completed:false, failed:false}

      const data = userData
      
      data.forEach(function(el){
        if(taskAssign == el.firstName){
          el.tasks.push(newTask)
          el.taskCount.newTask = el.taskCount.newTask + 1
        }
        
      })
      setUserData(data)
      console.log(data);
      
    
      setTaskTitle('')
      setTaskDate('')
      setTaskAssign('')
      setTaskCategory('')
      setTaskDescription('') 
      
       
 
  }
  return (
    <div className="admin-dashboard-content">
        <form onSubmit ={(e)=>{
          submitHandler(e)

        }} className="admin-form">
          <div className="form-left">
            <div>
              <h3 className="form-label">Title</h3>
              <input value={taskTitle} 
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }} className="input-text" type="text" placeholder="Make a UI Design" required />
            </div>
            <div>
              <h3 className="form-label">Date</h3>
              <input value={taskDate} 
              onChange={(e)=>{
                setTaskDate(e.target.value)}} className="input-text" type="date" required />
            </div>
            <div>
              <h3 className="form-label">Assign to</h3>
              <input value={taskAssign} 
              onChange={(e)=>{
                setTaskAssign(e.target.value)}} className="input-text" type="text" placeholder="employee name" />
            </div>
            <div>
              <h3 className="form-label">Category</h3>
              <input value={taskCategory} 
              onChange={(e)=>{
                setTaskCategory(e.target.value)}} className="input-text" type="text" placeholder="Design, Dev, etc" />
            </div>
          </div>

          <div className="form-right">

            <h3 className="form-label">Descriptions</h3>
            <textarea value={taskDescription} 
              onChange={(e)=>{
                setTaskDescription(e.target.value)}} className="custom-textarea" name="" id="" cols="25" rows="10"></textarea>
            <button className="t-button">Create Task</button>
      
          </div>
        </form>
      </div>
  )
}

export default CreateTask