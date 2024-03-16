import React, { createContext, useState } from "react";

const TaskContext = createContext();

function ContextTask({ children }) {
  const [inputTaskData, setinputTaskData] = useState([]);

  const[loginData, setLoginData] = useState([]);

  const [SignupData, setSignupData] = useState([]);

  //console.log(loginData);

  const loginValue = (data) => {
    setLoginData([...loginData, data]);
    return loginData;
  };

  const addTask = (task) => {
    setinputTaskData([...inputTaskData, task]);
  };

  const editTask = (index, updatedTask) => {
    inputTaskData[index] = updatedTask;
    console.warn(inputTaskData)
  };

  const removeTask = (index) => {
    const newinputTaskData = [...inputTaskData];
    newinputTaskData.splice(index, 1);
    setinputTaskData(newinputTaskData);
    alert("task deleted successfully");
  };

  return (
    <div>
      <TaskContext.Provider value={{ inputTaskData, addTask, editTask, removeTask,loginValue }}>
        {children}
      </TaskContext.Provider>
    </div>
  );
}

export { TaskContext, ContextTask };
