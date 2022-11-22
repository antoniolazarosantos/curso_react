const UserDetails = ({nome,idade,profissao}) => {
  return (
    <div>
        <h1>UserDetails</h1>
        <ul>
            <li>Nome:{nome}</li>
            <li>Idade:{idade}</li>
            <li>Profissão:{profissao}</li>
            {idade >= 18 ? (<li>Pode ter habilitação.</li>):(<li>Sem permissão para dirigir.</li>)}
        </ul>
    </div>
  )
};

export default UserDetails;