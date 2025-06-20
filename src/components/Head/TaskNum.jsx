import React from 'react'

const TaskNum = ({data}) => {
    if (!data || !data.taskCount) {
        return <div className='taskNum'>Loading...</div>;
    }
  return (
    <div className='taskNum'>
        <div className='taskNum-container1'>
            <h1 className='value'>{data.taskCount.newTask}</h1>
            <h2 className='newTask'>New Task</h2>
        </div>
        <div className='taskNum-container2'>
            <h1 className='value'>{data.taskCount.completed}</h1>
            <h2 className='newTask'>Completed Task</h2>
        </div>
        <div className='taskNum-container3'>
            <h1 className='value'>{data.taskCount.active}</h1>
            <h2 className='newTask'>Accepted Task</h2>
        </div>
        <div className='taskNum-container4'>
            <h1 className='value'>{data.taskCount.failed}</h1>
            <h2 className='newTask'>Failed Task</h2>
        </div>
    </div>
  )
}

export default TaskNum