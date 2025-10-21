import React from "react";
import fastFurious from "../pic/Fast-Furious.jpg";

function Moviecard() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        overflow: "hidden",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
        marginTop: "80px",
      }}
    >
      {/* صورة البوستر */}
      <img
        src={fastFurious}
        alt="poster movie"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "left center", // تركّز الصورة على الشمال
        }}
      />

      {/* التدرج من اليمين للشمال */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to left, rgba(0,0,0,0.8) 40%, rgba(29, 27, 27, 0.3) 80%, transparent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingRight: "80px",
          color: "white",
          textAlign: "right",
        }}
      >
        {/* محتوى النص */}
        <div style={{ maxWidth: "500px" }}>
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "20px",
              textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            Fast & Furious
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            تدور أحداث الفيلم حول سباق السيارات في الشوارع من جديد، والتي تقود
            (توريتو) إلى لوس أنجلوس وهناك يتجدد العداء بينه وبين (بريان)، لكن
            شيء غير متوقع يحدث، يظهر عدو مشترك، وهنا يتحتم على (توريتو) و(بريان)
            تنحية عدائهم جانبًا، لكي يستطيعوا مواجهة هذا العدو، ومن ثم تصفية
            العداء فيما بينهما.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Moviecard;
