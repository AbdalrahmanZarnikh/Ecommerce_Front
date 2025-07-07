import "./App.css";
import Container from "./components/Container/Container";
import SectionCards from "./components/SectionCards/SectionCards";
import Hero from "./components/Hero/Hero";
import { Toaster } from "react-hot-toast";
import {getProducts} from "./redux/slice/product/productSlice"
import {getCategories} from "./redux/slice/category/categorySlice"
import { useSelector } from "react-redux";
function App() {
 
  return (
    <>
      <Toaster />
      <Hero />
      <Container>
        <SectionCards title={ "تسوق حسب القسم"} to={"categories"} getThunk={getCategories}/>
        <SectionCards title={"أحدث المنتجات "}  to={"products"} getThunk={getProducts} />
      </Container>
    </>
  );
}

export default App;
