import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product({ isLoggedIn, addTocart }) {
  const { id } = useParams(); // يجيب الـ id من الرابط
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>جاري التحميل...</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>السعر: ${product.price}</p>
      <img src={product.image} alt={product.title} width="200" />

      {isLoggedIn ? (
        <button
          style={{ marginTop: "10px" }}
          onClick={() => addTocart(product)}
        >
          اشتري المنتج
        </button>
      ) : (
        <p style={{ color: "red", marginTop: "10px" }}>
          سجل دخول عشان تقدر تشتري المنتج
        </p>
      )}
    </div>
  );
}

export default Product;
