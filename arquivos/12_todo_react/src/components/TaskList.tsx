import React from 'react'
//CSS
import styles from './TaskList.module.css';
//Interfaces
import {ITask} from '../interfaces/Task';

interface Props {
  taskList: ITask[];
}

const TaskList = ({taskList} : Props) => {
  return (
    <>
    {taskList.length > 0 ? (
      taskList.map((task) => (
        <div key={task.id}>
          <p>{task.title}</p>
        </div>
      ))
    ) : (
      <p>Não há tarefas cadastradas!</p>
    )}
    </>
  )
}

export default TaskList;