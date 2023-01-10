import './App.css';
import {useState, useRef} from "react";
// Custom Hook
import { useFetch } from './hooks/useFetch';


const URL_BASE = "http://localhost:3000/products";

function App() {
  //const [products,setProducts] = useState([]);
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");

  const nameInputRef = useRef(null);

  const {data: items, httpConfig, loading } = useFetch(URL_BASE);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect (() => {
  //   async function fetchData() {
  //     const res = await fetch(URL_BASE);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fetchData();    
  // },[]);

  // Adicionando dados ao banco de dados
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Quando os states possuem os mesmos nomes das chaves, não precisa atribuir.
     const product = {name,price}; 
  //   const res = await fetch(URL_BASE,{
  //     method:"POST",
  //     headers: {
  //       "Content-Type" : "application/json"
  //     },
  //     body: JSON.stringify(product)
  // });
  // const addedProduct = await res.json();
  // setProducts((prevProducts) => [...prevProducts,addedProduct]);
 
  //Refatoração do POST
  httpConfig(product,"POST");
  setName("");
  setPrice("");
  nameInputRef.current.focus();
  
};

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {! loading &&
      <ul>
        { items && items.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" 
            name="name"
             value={name} 
             onChange={(e)=> setName(e.target.value)}
             ref={nameInputRef} />
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
