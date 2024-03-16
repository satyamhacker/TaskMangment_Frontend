import React, { useState, useContext, useEffect } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Button from "react-bootstrap/Button";
import "react-datepicker/dist/react-datepicker.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { TaskContext } from "./Context/ContextTask";
import { useNavigate } from 'react-router-dom';

function Task() {

  const navigate = useNavigate();

  const contextData = useContext(TaskContext);

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    dueDate: new Date(),
  });

  useEffect(()=>{
    const loginArrayData=contextData.loginValue();
    if(!loginArrayData.length>0)
    {
      alert("Please Login first");
      navigate("/")
    }
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setTaskData({
      ...taskData,
      dueDate: date,
    });
  };


  const handleShow = () =>{
    navigate('/Show_task');
  }

  const handleSubmit = () => {
    // console.log(taskData);

    contextData.addTask(taskData);

    setTaskData({
      title: "",
      description: "",
      dueDate: new Date(),
    
    });
    alert('task add successfully')
  };

  return (
    <div className="flex justify-center items-center h-screen borde">
      <div className="border border-black left-1/2 transform -translate-x-1/2 flex justify-center items-center font-extrabold   text-3xl absolute top-3 w-full h-14 bg-purple-600">
        Task Management System
      </div>
      <div className="border border-black border-5 p-12 inline-block">
        {" "}
        {/* Increased padding */}
        <Form className="font-bold">
          <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
            {" "}
            {/* Increased margin bottom */}
            <Form.Label>Title :</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleInputChange}
              placeholder="Please enter your title here"
              className="border-2 border-black  p-4"
            />
          </Form.Group>
          <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1">
            {" "}
            {/* Increased margin bottom */}
            <Form.Label>Description :</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={taskData.description}
              onChange={handleInputChange}
              placeholder="Please enter your description here"
              className="border-2 border-black p-4"
            />
          </Form.Group>
          <Form.Group className="mb-6" controlId="exampleForm.ControlInput2">
            {" "}
            {/* Increased margin bottom */}
            <Form.Label>Due Date :</Form.Label>
            <DatePicker
              selected={taskData.dueDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              className="form-control border-2 border-black p-4"
            />
            <CalendarMonthIcon />
          </Form.Group>
        </Form>
      </div>
      <Button
        onClick={handleSubmit}
        className="bg-green-600  absolute bottom-28"
        variant="primary"
        style={{ right: "40%" }}
      >
        Add Task
      </Button>
      <Button
        onClick={handleShow}
        className="bg-blue-600  absolute bottom-28"
        variant="primary"
        style={{ left: "39%" }}
      >
        Show Task
      </Button>
    </div>
  );
}

export default Task;
