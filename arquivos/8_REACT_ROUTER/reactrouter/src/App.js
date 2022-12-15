import './App.css';

import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info';
import Notfound from './pages/Notfound';
import Searchform from './components/Searchform';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
     <h1>React Router</h1>
     <BrowserRouter>
     <Navbar />
     <Searchform />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products/:id" element={<Product/>} />
      <Route path="/products/:id/info" element={<Info/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/company" element={<Navigate to = "/about" />} />
      <Route path="*" element = {<Notfound/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
