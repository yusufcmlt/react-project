import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import ProductsPage from "./pages/Products";

import Navbar from "./components/Navbar";
import PageLayout from "./components/PageLayout";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <Router>
      <Navbar
        onSearch={(searchVal) => {
          setSearchText(searchVal);
        }}
      />
      <PageLayout>
        <Routes>
          <Route path="/" element={<ProductsPage searchText={searchText} />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
