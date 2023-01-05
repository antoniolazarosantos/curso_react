import './App.css';
import {useState, useEffect} from "react";


const URL_BASE = "http://localhost:3000/products";

function App() {
  const [products,setProducts] = useState([]);
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect (() => {
    async function fetchData() {
      const res = await fetch(URL_BASE);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();    
  },[]);

  // Adicionando dados ao banco de dados
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Quando os states possuem os mesmos nomes das chaves, não precisa atribuir.
    const product = {name,price}; 
    const res = await fetch(URL_BASE,{
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(product)
  });
};

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        { products.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} />
          </label>
          <label>
            Valor:
            <input type="number" name="price" value={price} onChange={(e)=> setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar"/>
        </form>
      </div>
    </div>
  );
}

export default App;
