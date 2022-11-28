import './App.css';
import {useState} from "react";
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 7;
  const [redTitle,setredTitle] = useState(false);

  const handleClasseDinamica = () => {
    setredTitle(!redTitle);
  };
  return (
    <div className="App">
      {/* CSS Global */}
      <h1> React com CSS</h1>
      {/* CSS de Componente */}
      <MyComponent/>
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{color:"blue", padding:"25px", borderTop:"2px solid red"}}>
        Este elemento foi estilizado de forma inline
      </p>
      {/*Css Inline dinâmico */}
      <h2 style={n < 10 ? ({color:"purple"}):({color:"green"})}> Css dinâmico </h2>
      {/*Classe dinâmica */}
      <h2 className={redTitle ? "red-title":"title"}>Classe dinâmica</h2>
      <button onClick={handleClasseDinamica}>Clique aqui para trocar a classe dinâmica</button>
       {/*Css Module*/}
       <Title/>
    </div>
  );
}

export default App;
