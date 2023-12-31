// ProductsPage.js
import { FC, useEffect, useState } from "react";
import Product from "../components/Product";
import { useNavigate } from "react-router-dom";
import { ProductData } from "models/Product";

// Mock data for products

type ProductProps = {
  searchText?: string;
};

const ProductsPage: FC<ProductProps> = ({ searchText = "" }) => {
  const [mockProducts, setMockProducts] = useState<ProductData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setMockProducts(json.products));
  }, []);

  return (
    <div className="products-list">
      {mockProducts
        .filter((product) => {
          const searchString = searchText.trim().toLowerCase();
          if (searchString) {
            return (
              product.title.toLowerCase().includes(searchString) ||
              product.description.toLowerCase().includes(searchString)
            );
          }
          return true;
        })
        .map((product) => (
          <Product
            product={product}
            onClick={(id) => navigate(`product/${id}`)}
          />
        ))}
    </div>
  );
};

export default ProductsPage;
