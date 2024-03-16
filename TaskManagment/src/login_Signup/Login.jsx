import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { TaskContext } from "../Context/ContextTask";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();

  const logins = useContext(TaskContext);

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    logins.loginValue(inputValue);

    navigate("/task");
    
  };

  return (
    <div className="flex justify-center items-center h-screen font-bold relative">
      <h1 className="text-pink-600 font-extrabold absolute top-40 text-2xl">
        Welcome! Task Management System Login Page
      </h1>
      <Form
        style={{ width: "30rem" }}
        className="border border-black rounded-lg shadow-lg p-6"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={inputValue.email}
            onChange={handleChange}
            style={{
              borderWidth: "2px",
              borderStyle: "solid",
              fontWeight: "bold",
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={inputValue.password}
            onChange={handleChange}
            style={{ borderWidth: "2px", fontWeight: "bold" }}
          />
        </Form.Group>

        <Button className="bg-blue-600" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
