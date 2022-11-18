import {useState} from 'react';

const ManageData = () => {
    let someData = 10;
    const [number,setNumber] = useState(someData);
    
    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() =>{setNumber(30)}}>Mudar o state</button>
            </div>
        </div>
    );
}
export default ManageData;