import styles from './Car.module.css';
const Car = ({c}) => {
  return (
    <div className={styles.card}>
        <h1>{c.brand}</h1>
        <p>Cor: {c.color}</p>
    </div>
  )
};

export default Car;