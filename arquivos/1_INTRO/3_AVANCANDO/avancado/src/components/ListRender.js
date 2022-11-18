import {useState} from 'react';

const ListRender = () => {
  const [list] = useState(["Matheus","Pedro","Josias","Lázaro","Maria"]);

  const [users,setUsers] = useState([
    {id:1,nome:"Matheus"},
    {id:2,nome:"Carla"},
    {id:3,nome:"Luana"}]);

  const deleteUserRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
  
  return (
    <div>
        <ul>
            {list.map((item,indice) =>(
                <li key={indice}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((u) =>(
                <li key={u.id}>id:{u.id}-Nome:{u.nome}</li>
            ))}
        </ul>
        <button onClick={deleteUserRandom}>Delete user random</button>
    </div>
  )
};

export default ListRender;