import './Myform.css';

const Myform = () => {
  return (
    //Criação de forms
    <div>
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome"/>
            </div>
            <label>
                <span>E-mail:</span>
                <input type="text" name="email" placeholder="Digite o seu e-mail"/>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default Myform;