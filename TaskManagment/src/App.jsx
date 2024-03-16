import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Task from './Task';
import { ContextTask } from './Context/ContextTask';
import Show_task from './Show_task';
import Login from './login_Signup/Login';


function App() {
  return (
    <Router>
      <ContextTask>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/show_task" element={<Show_task />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </ContextTask>
    </Router>
  );
}

export default App;
