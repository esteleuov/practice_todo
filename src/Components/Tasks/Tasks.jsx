import React, { useEffect, useState } from "react";
import "./Tasks.css";
import FilterTasks from './FilterTasks'
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/taskReducers";

function Tasks() {
  const dispatch = useDispatch();
  const [part, setPart] = useState()

  const AddTodo = (title) => {
    dispatch(addTask(title));
  };

  useEffect(() => {

  }, [])

  return (
    <div className="tasks">
      <div className="task_lists">
        <FilterTasks/>
        <p id="add_task_btn" onClick={() => AddTodo(prompt())}>
          ...Записать задачу
        </p>
      </div>
    </div>
  );
}

export default Tasks;
