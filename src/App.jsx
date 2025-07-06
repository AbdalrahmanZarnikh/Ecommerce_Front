import "./App.css";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import ProductCard from "./components/ProductCard/ProductCard";
import SectionCards from "./components/SectionCards/SectionCards";
import Hero from "./components/Hero/Hero"
function App() {
  return (
    <>
    <Hero/>
    <Container>
      <SectionCards title={"الأكثر مبيعا"}/>
      <SectionCards title={"أحدث المنتجات "}/>
    </Container>
    </>
  );
}

export default App;
