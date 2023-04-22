import './App.css';
import Explore from './components/Explore';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Explore/>
      <Products/>
    </div>
  );
}

export default App;
