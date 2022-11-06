import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Jewelry from "./pages/jewelry/Jewelry";
import Contact from "./pages/contact/Contact";
import Footer from "./footer/Footer";

const App=()=> {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/jewelry" element={<Jewelry />}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  )
};

export default App;
