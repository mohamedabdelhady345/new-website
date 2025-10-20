import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";

function Home({ setIsLoggedIn, isLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUsername("");
    setPassword("");

    if (!isLoggedIn) {
      setUsername("");
      setPassword("");
    }
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      alert("تم تسجيل الدخول بنجاح ✅");
      setUsername("");
      setPassword("");
    } else {
      alert("من فضلك ادخل اسم المستخدم وكلمة المرور");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>اهلا بكم فى موقعنا</h1>
      <p>
        نحن نقدم احدث الافلام والمنتجات التى تريدونها وتحتوى على جميع المتعلقات
        التى تقوم بالانتشار سريعا ونحن نبتكر فى تقديم الموضوعات التى تهمكم
      </p>

      {/* فورم تسجيل الدخول على الشمال تحت الـ nav */}
      <form
        style={{
          position: "relative",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          width: "250px",
          marginTop: "-70px",
          marginLeft: "0", // عشان تبقى على الشمال
        }}
      >
        <p style={{ fontWeight: "bold" }}>Enter your data👇</p>

        <label>username</label>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="new-username"
        />
        <br />

        <label>password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />
        <br />

        <button
          style={{
            marginTop: "10px",
            backgroundColor: "black",
            color: "white",
            padding: "5px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleLogin}
        >
          login
        </button>
      </form>

      {/* هنا كارت الفيلم */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "60px",
          gap: "40px",
        }}
      >
        <Moviecard />
      </div>
    </div>
  );
}

export default Home;
