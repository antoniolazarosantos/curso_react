import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const Product = () => {
    // Rota dinâmica
    const { id } = useParams();
    const url = "http://localhost:3000/products/" + id;

    const { data: product, loading, error } = useFetch(url);

  return (
    <>
    {error && <p>Ocorreu um erro...</p>}
    {loading && <p>Carregando...</p>}
    {product && (
        <div>
            <h1>{product.name}</h1>
            <p>R$ {product.price}</p>
            <Link to = {`/products/${product.id}/info`}>Mais informações</Link>
        </div>
    )}
    </>
  )
};

export default Product;