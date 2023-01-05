import './App.css';
import {useState, useEffect} from "react";


const URL_BASE = "http://localhost:3000/products";

function App() {
  const [products,setProducts] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect (() => {
    async function fetchData() {
      const res = await fetch(URL_BASE);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();    
  },[]);

  console.log(products);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
    </div>
  );
}

export default App;
