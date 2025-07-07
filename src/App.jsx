import "./App.css";
import Container from "./components/Container/Container";
import SectionCards from "./components/SectionCards/SectionCards";
import Hero from "./components/Hero/Hero"
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
    <Toaster/>
    <Hero/>
    <Container>
      <SectionCards title={"الأكثر مبيعا"}/>
      <SectionCards title={"أحدث المنتجات "}/>
    </Container>
    </>
  );
}

export default App;
