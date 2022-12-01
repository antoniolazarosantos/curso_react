import React,{createContext} from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Destructuring,{Category} from "./components/Destructuring";
import State from "./components/State";
import Context from "./components/Context";


type textOrNull = string | null;
type fixed = "Olá" | "Ok" | "Não";

interface IAppContext {
  language: string,
  framework: string,
  projects : number,
};

export const AppContext = createContext<IAppContext | null>(null);

function App() {

  // 1- Variáveis
  const name : string = "Lázaro";
  const age : number = 46;
  const isWorking : boolean = true;
  // 2 - Funções
  const userGreeting = (name:string): string => {
    return `Olá, ${name}!`;
  }

  const tipo1 : textOrNull = "Tem algo aqui.";
  let tipo2 : textOrNull = null;
  let confirma : fixed = "Ok";

  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects : 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <br/>
      <SecondComponent name="Segundo"/>
      <Destructuring 
      title="Desestruturando props"
      content="Propriedades"
      commentQty={20}
      tags={["ts","js","props"]}
      category={Category.JS}
      />
      <State/>
      <p>Tipo1: {tipo1}</p>
      <p>Tipo2: {tipo2}</p>
      <p>Confirma:{confirma}</p>
      <Context/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
