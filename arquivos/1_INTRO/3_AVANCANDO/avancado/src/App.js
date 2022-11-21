import './App.css';
import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  const usuario = {nome: "Lázaro",idade:46};
  const cars = [
    {id:1,brand:"Ferrari",color:"Red",newCar: false,km:1000},
    {id:2,brand:"Creta",color:"Black",newCar: true,km:0},
    {id:3,brand:"Fiat Toro",color:"Blue",newCar: false,km:15000}
  ];
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName usuario={usuario}/>
      <CarDetails brand="Creta" km={2000} color="Preto" newCar={false}/>
      <CarDetails brand="Jeep"  color="Azul" km={0} newCar={true}/>
      <CarDetails brand="Fiat"  color="Vermelho" km={0} newCar={true}/>
      {cars.map((car) =>(
        <CarDetails 
        brand={car.brand}
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}
        />
      ))}
      <Fragment />
      <Container myValue="Teste">
        {/*Conteúdo que será impresso dentro do componente*/}
        <p>Este é o conteúdo do children</p>
      </Container>
      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>
       {/*Imagem em asset*/}
       <div>
        <img src={City} alt="Cidade"/>
      </div>
  
    </div>
  );
}

export default App;
