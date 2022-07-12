import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ProductList></ProductList>
      <Footer></Footer>
    </div>
  );
}

export default App;
