import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductListing from "./components/ProductListing";
import UsersList from "./components/UsersList";
import ProductDetail from "./components/ProductDetail";
import Registration from "./components/Registration";
import Settings from "./components/Settings";
import RequireAuth from "./RequireAuth";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="*" element={<div>404 not found!</div>} />
          <Route
            path="/settings"
            element={
              <RequireAuth redirectTo="/">
                <Settings />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
