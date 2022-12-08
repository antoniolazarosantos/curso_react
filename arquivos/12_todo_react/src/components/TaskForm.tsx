import React,{useState,useEffect,ChangeEvent,FormEvent} from 'react';
//CSS
import styles from './TaskForm.module.css';
//Interfaces
import {ITask} from '../interfaces/Task';

interface Props {
  btnText : string;
  taskList : ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?:ITask | null;
  handleUpdate?(id:number, title: string, difficult: number) : void;
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficult, setDifficult] = useState<number>(0);

  useEffect(() => {
    if(task){
      setId(task.id);
      setTitle(task.title);
      setDifficult(task.difficult);
    }
  },[task])

  const addTaskHandle = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(handleUpdate){
      handleUpdate(id,title,difficult);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask : ITask = {id,title,difficult};
      setTaskList!([...taskList, newTask]);
      setTitle("");
      setDifficult(0);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title"){
      setTitle(e.target.value);

    } else if (e.target.name === "difficult"){
      setDifficult(parseInt(e.target.value));
    }
  }


  return (
    <form onSubmit={addTaskHandle} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input type="text" 
        name="title"
         placeholder="Título da tafefa..." 
         onChange={handleChange}
         value={title}/>
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficult">Dificuldade:</label>
        <input type="text" 
        name="difficult" 
        placeholder="Dificuldade da tafefa..." 
        onChange={handleChange}
        value={difficult}/>
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm;