import React, { useState } from 'react'
import './Part.css'
import { useDispatch, useSelector } from "react-redux";
import { all_tasks, removed_tasks, completed_tasks, not_done } from '../../redux/partReducers';

function Part() {
  const dispatch = useDispatch();
  const [filterTask, setFilter] = useState(null)

  const allTasks = () => {
    dispatch(all_tasks())
  }
  
  const completedTasks = () => {
    dispatch(completed_tasks())
  }

  const removedTasks = () => {
    dispatch(removed_tasks())
  }

  const notCompletedTasks = () => {
    dispatch(not_done())
  }

  return (
    <div className='Parts'>
        <div className="all" onClick={() => allTasks()}>
          <h2 >Все задачи</h2>
        </div>
        <div className="done" onClick={() => completedTasks()}>
            <h2>Выполнено</h2>
        </div>
        <div className="not_done" onClick={() => notCompletedTasks()}>
            <h2>Не выполнено</h2>
        </div>
        <div className="removed" onClick={() => removedTasks()}>
            <h2>Вычеркнуто</h2>
        </div>
    </div>
  )
}

export default Part