import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/shop' element = {<Shop/>}/>
        <Route path='/cart' element = {<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
