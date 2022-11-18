
const ShowUserName = (props) => {
  return (
    <div>
        <h2> O nome do usuário e: {props.usuario.nome} e sua idade é: {props.usuario.idade}</h2>
    </div>
  )
};

export default ShowUserName;