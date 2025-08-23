import "./App.css";
import Container from "./components/Container/Container";
import SectionCards from "./components/SectionCards/SectionCards";
import Hero from "./components/Hero/Hero";
import {getProducts} from "./redux/slice/product/productSlice"
import {getCategories} from "./redux/slice/category/categorySlice"
import {getBrands} from "./redux/slice/brand/brandSlice"
import Hero2 from "./components/Hero2/Hero2";
function Home() {
 
  return (
    <div >
      {/* <Hero /> */}
      <Hero2/>
      <Container>
        <SectionCards title={ "تسوق حسب القسم"} to={"categories"} getThunk={getCategories}/>
        <SectionCards title={" تسوق حسب الماركة"}  to={"brands"} getThunk={getBrands} />
        <SectionCards title={"أحدث المنتجات "}  to={"products"} getThunk={getProducts} />
      </Container>
    </div>
  );
}

export default Home;
