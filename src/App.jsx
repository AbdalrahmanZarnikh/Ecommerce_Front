import "./App.css";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <Container>
      <NavBar />
      <ProductCard/>
    </Container>
  );
}

export default App;
