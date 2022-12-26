import './Myform.css';
import {useState} from "react";

const Myform = ({user}) => {
    // Gerenciamento de dados
    const [name,setName] = useState(user ? user.name : '');
    const [email,setEmail] = useState(user ? user.email : '');
    const [biografia,setBiografia] = useState(user ? user.biografia : '');
    const [role,setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setBiografia("");
        setRole("");
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
            <label>
                <span>Biografia:</span>
                <textarea
                name="biografia"
                placeholder="Biografia do usuário"
                value={biografia}
                onChange={(e) => setBiografia(e.target.value)}/>
            </label>
            <label>
                <span>Função no sistema:</span>
                <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>                 
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default Myform;