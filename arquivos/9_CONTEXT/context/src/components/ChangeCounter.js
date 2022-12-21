// 3 - Alterando o contexto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";


const ChangeCounter = () => {
    const {counter,setCounter} = useContext(CounterContext);
  return (
    <div>
        <h1>ChangeCounter</h1>
        <button onClick={() => setCounter(counter+1)}>Adicionar valor ao contador</button>
    </div>
  )
};

export default ChangeCounter;