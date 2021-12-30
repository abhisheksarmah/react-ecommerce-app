import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import Registration from "./components/Registration";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route>404 not found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
