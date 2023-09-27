
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import OrderStatus from './Components/OrderStatus';
import PopUp from './Components/PopUp';
import ProductModule from './Components/ProductModule';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <div className='hokmeBackground'>
     <OrderStatus/>
     <ProductModule/>
     </div>
     
    </div>
  );
}

export default App;
