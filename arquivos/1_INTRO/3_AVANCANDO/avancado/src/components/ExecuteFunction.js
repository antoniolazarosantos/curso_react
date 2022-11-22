const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <p>Evento do componente Pai</p>
    <button onClick={myFunction}>Clique aqui para executar a função</button>
    </div>
  )
};

export default ExecuteFunction;