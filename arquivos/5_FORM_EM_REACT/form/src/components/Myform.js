import './Myform.css';
import {useState} from "react";

const Myform = ({user}) => {
    // Gerenciamento de dados
    const [name,setName] = useState(user ? user.name : '');
    const [email,setEmail] = useState(user ? user.email : '');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    //Criação de forms
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text"
                 name="name" 
                 placeholder="Digite o seu nome" 
                 value={name}
                 onChange={handleName}/>
            </div>
            <label>
                <span>E-mail:</span>
                <input type="text" 
                name="email" 
                placeholder="Digite o seu e-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default Myform;