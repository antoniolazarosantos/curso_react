import FirstComponent from "./components/FirstComponent";

function App() {

  // 1- Variáveis
  const name : string = "Lázaro";
  const age : number = 46;
  const isWorking : boolean = true;
  // 2 - Funções
  const userGreeting = (name:string): string => {
    return `Olá, ${name}!`;
  }
  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
    </div>
  );
}

export default App;
