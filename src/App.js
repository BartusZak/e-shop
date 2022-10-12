import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header, Footer } from "./containers/index";
import { Home, Contact, Products } from "./pages/index";

import "./style/index.scss";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
