import './App.css';
import Explore from './components/Explore';
// import Footer from './components/Footer';
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
      {/* <Footer/> */}
    </div>
  );
}

export default App;
