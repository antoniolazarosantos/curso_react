
const ChangeMessageState = ({handleMessage}) => {
    const m = ["Oi","Olá","Tudo bem?"];
  return (
    <div>
        <h1>ChangeMessageState</h1>
        <button onClick={()=> handleMessage(m[0])}>1</button>
        <button onClick={()=> handleMessage(m[1])}>2</button>
        <button onClick={()=> handleMessage(m[2])}>3</button>
    </div>
  )
};

export default ChangeMessageState;