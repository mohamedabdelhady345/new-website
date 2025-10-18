import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products({ isLoggedIn, addTocart }) {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  return (
    <div>
      <h1>قائمة المنتجات</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
            <br />
            {isLoggedIn ? (
              <button
                style={{ marginTop: "5px" }}
                onClick={() => addTocart(product)}
              >
                اشتري المنتج
              </button>
            ) : (
              <p style={{ color: "red" }}>سجل دخول عشان تقدر تشتري المنتج</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Products;
