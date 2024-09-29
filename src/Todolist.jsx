import React, { useState } from 'react'
import "./Todolist.css"

const Todolist = () => {

  const [task, settask] = useState([])

  const [newtask, setnewtask] = useState("")

  function handelInput(e) {
    setnewtask(e.target.value)
  }

  function addTask() {
    if (newtask.trim() !== "") {
      settask(t => [...t, newtask]); // updater function 
      setnewtask("");
    }
  }

  function deleteTask(index) {
    const updateTasks = task.filter((_, i) => i !== index);
    settask(updateTasks);
  }

  function handeledit(index, updatedTask) {
    setnewtask(task[index])
    settask((task) => {
      const updatedTasks = [...task];
      updatedTasks[index] = updatedTask;
      return updatedTasks;
    });
  }

  return (
    <div className="main-container">
      <div className="main">

        <div className="container">

          <h2>Complete Your Tasks!</h2>

          <div className="tasks">
            <input type="text"
              placeholder='Add Tasks...'
              value={newtask}
              onChange={handelInput}
            />

            <button className='add-btn' onClick={addTask}>Add Task</button>

          </div>

          <ol>
            {task.map((tasks, index) =>

              <li key={index}>

                <div className="all-tasks">

                  <div className="text">{tasks}</div>

                  <div className="btns">
                    <button className='edit-task-btn' onClick={() => { handeledit(index, newtask) }}><i class="fa-solid fa-pen"></i></button>
                    <button className='dele-task-btn' onClick={() => deleteTask(index)}><i class="fa-solid fa-trash"></i></button>

                  </div>

                </div>

              </li>
            )}

          </ol>

        </div>
      </div>

    </div>

  )
}

export default Todolist


