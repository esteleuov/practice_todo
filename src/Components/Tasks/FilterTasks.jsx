import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, completeTask } from "../../redux/taskReducers";

function FilterTasks() {
  const dispatch = useDispatch();
  const [list, setList] = useState([])  
  const task = useSelector((store) => store.tasks);
  const filterTask = useSelector((store) => store.parts.value)

  const removeTodo = (id) => {
    dispatch(removeTask(id));
  };

  const finishTodo = (title) => {
    dispatch(completeTask(title));
  };
 
  
  useEffect(() => {
    if (filterTask === 'all') {
      setList(task)
    } else if (filterTask === 'completed') {
      setList(task.filter((e) => e.completed === true))
    } else if (filterTask === 'not_done') {
      setList(task.filter((e) => e.completed === false))
    } else if (filterTask === 'removed') {
      setList(task.filter((e) => e.removed === true))
    } 
    
  }, [filterTask, task])


  return (
    <div className="list">
      { list.length > 0 
          ? (list.map((el) => (
              <div className="task" key={el.id}>
                {(el.removed === true) ? <p style={{textDecorationLine: 'line-through', textDecorationThickness: '2px'}}>{el.title}</p> : <p>{el.title}</p>}                    
                <div id="remove_btn" onClick={() => removeTodo(el.id)}></div>
                {(el.completed === true) ? <div id="did_btn" style={{ display: 'block'}} onClick={() => finishTodo(el.id)}></div> : <div id="did_btn" onClick={() => finishTodo(el.id)}></div>}            
              </div>
            ))
          ) 
          :  <p>Список задач пуст</p> }
    </div>
  );
}

export default FilterTasks;
