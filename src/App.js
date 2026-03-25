import Navbar from './components/Navbar/Navbar';
import Herosection from './components/Hero Section/Herosection';
import Collections from './components/Collections/Collections';
import Footer from './components/Footer/Footer';
import './App.css';
import ProductCard from './components/Product card/ProductCard';

function App() {

  return (
    <div>
      <Navbar />
      <Herosection/>
      <Collections>LATEST DROPS</Collections>
      <ProductCard/>
      <Footer/>
    </div>
  );
}

export default App;
