import { useState } from "react";

function Register() {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("بيانات التسجيل:", formData);
    alert("تم التسجيل بنجاح ✅");
  };

  return (
    <div
      style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
    >
      <form onSubmit={handleSubmit}>
        <h2>تسجيل اسم المستخدم </h2>
        <div style={{ margin: "10px 0" }}>
          <input
            type="text"
            name="username"
            placeholder="اسم المستخدم"
            value={formData.username}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <h2>تسجيل الايميل </h2>
        <div style={{ margin: "10px 0" }}>
          <input
            type="email"
            name="email"
            placeholder="insert email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <h2>ادخل الباسورد </h2>
        <div style={{ margin: "10px 0" }}>
          <input
            type="password"
            name="password"
            placeholder="insert password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            background: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          تسجيل
        </button>
      </form>
    </div>
  );
}
export default Register;
