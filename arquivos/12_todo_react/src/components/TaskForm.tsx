import React from 'react';
//CSS
import styles from './TaskForm.module.css';

interface Props {
  btnText : string;
}

const TaskForm = ({ btnText }: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Título da tafefa..."/>
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficult">Dificuldade:</label>
        <input type="text" name="difficult" placeholder="Dificuldade da tafefa..."/>
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm;