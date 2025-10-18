import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import Movies from "./component/Movies";
import Movie from "./component/Movie";
import Register from "./component/Register";
import { useState, useEffect } from "react";
import Cart from "./component/Cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const [cart, setcart] = useState([]);
  const addTocart = (Product) => {
    setcart((prev) => [...prev, Product]);
  };

  // ✅ زر تسجيل الخروج
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const DeletItem = (id) => {
    setcart((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <nav style={{ background: "#333", padding: "10px" }}>
        <Link to="/" style={{ color: "white", margin: "10px" }}>
          Home
        </Link>
        <Link to="products" style={{ color: "white", margin: "10px" }}>
          products
        </Link>
        <Link to="movies" style={{ color: "white", margin: "10px" }}>
          Movies
        </Link>
        <Link to="register" style={{ color: "white", margin: "10px" }}>
          Register
        </Link>
        <Link to="/cart" style={{ color: "white", margin: "10px" }}>
          🛒 Cart ({cart.length})
        </Link>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            style={{
              marginLeft: "20px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            تسجيل الخروج
          </button>
        )}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              isLoggedIn={isLoggedIn}
              addTocart={addTocart}
              DeletItem={DeletItem}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <Product
              isLoggedIn={isLoggedIn}
              addTocart={addTocart}
              DeletItem={DeletItem}
            />
          }
        />
        <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn} />} />
        <Route path="/movies/:id" element={<Movie isLoggedIn={isLoggedIn} />} />
        <Route
          path="/register"
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} DeletItem={DeletItem} />}
        />
      </Routes>
    </div>
  );
}

export default App;
