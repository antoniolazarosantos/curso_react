import React from 'react'
//CSS
import styles from './TaskList.module.css';
//Interfaces
import {ITask} from '../interfaces/Task';

interface Props {
  taskList: ITask[];
  handleDelete(id:number):void;
  handleEdit(task:ITask):void;
}

const TaskList = ({taskList, handleDelete, handleEdit} : Props) => {
  const low_difficult = 6;
  return (
    <>
    {taskList.length > 0 ? (
      taskList.map((task) => (
        <div key={task.id} className={styles.task}>
          <div className={styles.details}> 
            <h4 className={task.difficult >= low_difficult ? styles.high_difficult : "" }>{task.title}</h4>
            <p className={task.difficult >= low_difficult ? styles.high_difficult : "" }>Dificuldade: {task.difficult}</p>
          </div>
          <div className={styles.actions}>
            <i className="bi bi-pencil" onClick={()=>{handleEdit(task)}}></i>
            <i className="bi bi-trash" onClick={() =>{handleDelete(task.id)}}></i>
          </div>
         
        </div>
      ))
    ) : (
      <p className={styles.emptyTask}>Não há tarefas cadastradas!</p>
    )}
    </>
  )
}

export default TaskList;