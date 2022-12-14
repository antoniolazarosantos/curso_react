import './App.css';

import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info';


function App() {
  return (
    <div className="App">
     <h1>React Router</h1>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/produtos" Navigate to = "http://localhost:3000/products" />
      <Route path="/products/:id" element={<Product/>} />
      <Route path="/products/:id/info" element={<Info/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
