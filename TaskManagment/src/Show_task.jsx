import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "./Context/ContextTask";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

function Show_task() {
  const readTask = useContext(TaskContext);
  const [editIndex, setEditIndex] = useState(-1); // Track the index of the task being edited
  const [newTitle, setNewTitle] = useState(""); // Store the updated title temporarily
  const [newDescription, setNewDescription] = useState(""); // Store the updated description temporarily
  const [newDueDate, setNewDueDate] = useState(new Date()); // Store the updated due date temporarily

  const navigate = useNavigate();

  useEffect(() => {
    if (readTask.inputTaskData.length == 0) {
      alert("No Any Task Added");
      navigate("/");
    }
  }, []);

  const handleEdit = (index, task) => {
    setEditIndex(index);
    setNewTitle(task.title);
    setNewDescription(task.description);
    setNewDueDate(task.dueDate);
  };

  const handleSave = (index, task) => {
    task.title = newTitle;
    task.description = newDescription;
    task.dueDate = newDueDate;
    readTask.editTask(index, task);
    setEditIndex(-1); // Reset editIndex after saving
    alert("task edited successfully");
  };

  const handleCheckBox = (index,task) => {
    //console.warn("ss",task);
    task.completed = !task.completed;
    readTask.editTask(index, task);
  };

  return (
    <div>
      {readTask.inputTaskData &&
        readTask.inputTaskData.map((task, index) => (
          <div key={index} className="border border-black p-4 mb-4">
            {editIndex === index ? (
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="border-2 border-black p-1"
                />
                <label>Description:</label>
                <input
                  type="text"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="border-2 border-black p-1"
                />
                <label>Due Date:</label>
                <input
                  type="date"
                  value={newDueDate.toISOString().split("T")[0]}
                  onChange={(e) => setNewDueDate(new Date(e.target.value))}
                  className="border-2 border-black p-1"
                />
                <button
                  onClick={() => handleSave(index, task)}
                  className="bg-green-600 text-white px-3 py-1 ml-2"
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <h3>Title: {task.title}</h3>
                <p>Description: {task.description}</p>
                <p>Due Date: {task.dueDate.toDateString()}</p>
                <button
                  onClick={() => handleEdit(index, task)}
                  className="bg-blue-600 text-white px-3 py-1 mr-2"
                >
                  <EditIcon />
                </button>
                <button
                  onClick={() => readTask.removeTask(index)}
                  className="bg-red-600 text-white px-3 py-1"
                >
                  <DeleteIcon />
                </button>
                <Checkbox
                  checked={task.completed}
                  onClick={() => handleCheckBox(index, task)}
                />
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Show_task;
