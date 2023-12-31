import { ProductData } from "models/Product";
import { FC, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const ProductDetails: FC = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState<ProductData>();

  useEffect(() => {
    console.log("Effect triggered");
    console.log("ID:", id);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProductDetail(json));
  }, []);

  return (
    <div className="productPage-container">
      <div className="productPage-image">
        <img src={productDetail?.images[0]} />
      </div>
      <div className="productPage-info">
        <strong className="productPage-productName">
          {productDetail?.title}
        </strong>
        <p className="productPage-productDesc">{productDetail?.description}</p>
        <div className="productPage-priceSection">
          <span className="productPage-price">{productDetail?.price} TL</span>
          <div>
            <button className="productPage-cartButton">SATIN AL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
