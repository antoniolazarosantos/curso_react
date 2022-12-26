import './App.css';
import Myform from './components/Myform';

function App() {
  return (
    <div className="App">
      <h1>Formulários com React</h1>
      <Myform user={{name:"Josias",email:"josias@terra.com.br"}}/>
    </div>
  );
}

export default App;
