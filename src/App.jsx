import "./App.css";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import ProductCard from "./components/ProductCard/ProductCard";
import SectionCards from "./components/SectionCards/SectionCards";

function App() {
  return (
    <Container>
      <SectionCards title={"الأكثر مبيعا"}/>
      <SectionCards title={"الأعلى  تصنيفا"}/>
    </Container>
  );
}

export default App;
