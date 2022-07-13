import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { 
  Navbar
} from "./components/index"
import {
  Home,
  Cart
} from "./pages/index"
import './App.css';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/"         exact element={<Home/>} />
          <Route path="/cart"     exact element={<Cart/>} />
        </Routes>  
      </div>
    </Router>
    </>
  );
}

export default App;