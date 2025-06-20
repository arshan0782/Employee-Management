import React from 'react';

const AcceptTask = ({ data, onAccept, onReject }) => {
  const handleAccept = (props) => {
    onAccept(data.id); // or pass the full data if needed
  };

  const handleReject = (props) => {
    onReject(data.id);
  };

  return (
    <div className='tasklistbox'>
      <div className='boxinfo'>
        <h3>{data.category}</h3>
        <h4>{data.date}</h4>
      </div>
      <h2 className='ptitle'>{data.title}</h2>
      <p className='paragraph'>{data.description}</p>
      <div className='btns'>
        <button onClick={handleAccept} className='bt1'>Accept</button>
        <button onClick={handleReject} className='bt2'>Reject</button>
      </div>
    </div>
  );
};

export default AcceptTask;
