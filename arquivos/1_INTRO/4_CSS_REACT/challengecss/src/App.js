import './App.css';
import Car from './components/Car.js';

function App() {
  const cars = [
    {id:1,brand:"Ferrari",color:"Red",newCar: false,km:1000},
    {id:2,brand:"Creta",color:"Black",newCar: true,km:0},
    {id:3,brand:"Fiat Toro",color:"Blue",newCar: false,km:15000}
  ];
  return (
    <div className="App">
      <h1> Showroom de Carros</h1>
      <div className="car-container">
      {cars.map((p) => (
        <Car c={p}/>
      ))}

      </div>
    </div>
  );
}

export default App;
