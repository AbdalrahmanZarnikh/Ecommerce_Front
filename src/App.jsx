import "./App.css";
import Container from "./components/Container/Container";
import SectionCards from "./components/SectionCards/SectionCards";
import Hero from "./components/Hero/Hero";
import {getProducts} from "./redux/slice/product/productSlice"
import {getCategories} from "./redux/slice/category/categorySlice"
import {getBrands} from "./redux/slice/brand/brandSlice"
function App() {
 
  return (
    <>
      <Hero />
      <Container>
        <SectionCards title={ "تسوق حسب القسم"} to={"categories"} getThunk={getCategories}/>
        <SectionCards title={" تسوق حسب الماركة"}  to={"brands"} getThunk={getBrands} />
        <SectionCards title={"أحدث المنتجات "}  to={"products"} getThunk={getProducts} />
      </Container>
    </>
  );
}

export default App;
