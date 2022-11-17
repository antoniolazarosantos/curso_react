import {useState} from 'react';

const ManageData = () => {
    let someData = 10;
    const [number,setNumber] = useState(someData);
    const handleMudarValor = () => {
        someData = 20;
    };
    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick="handleMudarValor">Mudar o valor</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() =>{setNumber(30)}}>Mudar o state</button>
            </div>
        </div>
    );
}
export default ManageData;