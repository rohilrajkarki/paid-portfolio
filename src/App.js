import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productlist/ProductList";
import Toggle from "./components/toggle/Toggle";


function App() {
  return (
    <>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </>
  );
}

export default App;
