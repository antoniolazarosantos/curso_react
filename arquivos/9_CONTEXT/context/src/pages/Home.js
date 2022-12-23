//import { useContext } from "react";
import ChangeCounter from "./../components/ChangeCounter";
//import { CounterContext } from "../context/CounterContext";

// Refatorando hook
import { useCounterContext } from "../hooks/useCounterContext";

// Contexto mais complexo
import { useTitleColorContext } from "../context/useTitleColorContext";

const Home = () => {
    //const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();
    // Contexto mais complexo
    const {color, dispatch} = useTitleColorContext();

    // Alterando state complexo
    const setTitleColor = (color) => {
      dispatch({type:color});
    }
  return (
    <div>
        <h1 style={{color:color}}>Home</h1>
        <p>Valor do contador: {counter}</p>
        {/* Alterando o valor do contador */}
        <ChangeCounter />
        {/*  Contexto mais complexo */}
        <div>
          <button onClick={()=>setTitleColor("RED")}>Vermelho</button>
          <button onClick={()=>setTitleColor("BLUE")}>Azul</button>
        </div>

    </div>
  )
};

export default Home;