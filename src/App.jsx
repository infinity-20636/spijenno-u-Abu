import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Hero } from "./pages/Hero";
import { Shop } from "./pages/Shop";
import { Lookbook } from "./pages/Lookbook";
import { Features } from "./pages/Features";
import { Pages } from "./pages/Pages";
import { Blog } from "./pages/Blog";
import { Header } from "./components/Header";



const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="" element={<Hero />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
