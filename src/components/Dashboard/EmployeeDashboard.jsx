import React from "react";
import Header from "../Head/Header";
import "./dashboard.css";
import TaskNum from "../Head/TaskNum";
import TaskList from "../Task/TaskList";
import AcceptTask from "../Task/AcceptTask";

const EmployeeDashboard = (props) => {
  return (
    <div className="emp-dashboard">

      <Header changeUser= {props.changeUser} data={props.data} />
      <TaskNum data={props.data}/>
      <TaskList data={props.data}/>
      
    
    </div>
  );
};

export default EmployeeDashboard;
