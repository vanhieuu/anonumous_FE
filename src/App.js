import Home from "./Home";
import Product from "./Product";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailProduct from "./DetailProduct";
function App() {
  // tiendung
  // tiendung12345
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/" element={<Product />} />
        <Route path="detail-product/" element={<DetailProduct />} />
        <Route path="register/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
