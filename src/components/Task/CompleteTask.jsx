import React from 'react'

const CompleteTask = ({data}) => {
  return (
      <div className='tasklistbox'>
        <div className='boxinfo'>
          <h3> {data.category} </h3>
          <h4>{data.date} </h4>
        </div>
        <h2 className='ptitle'> {data.title}</h2>
        <p className='paragraph'>  {data.description}!</p>
        <div>
            <button className='bt4'>Complete Task</button>
            
        </div>
        </div>
  )
}

export default CompleteTask