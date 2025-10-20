import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie({ isLoggedIn }) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  // 🎬 لينكات فيديوهات مختلفة لكل فيلم
  const videoLinks = [
    "https://www.youtube.com/embed/g_z-Fa-hgyk", // الفيلم 0
    "https://www.youtube.com/embed/WQV4mQoaA7Y", // الفيلم 1
    "https://www.youtube.com/embed/h7gvFravm4A", // الفيلم 2
    "https://www.youtube.com/embed/qEVUtrk8_B4", // الفيلم 3
    "https://www.youtube.com/embed/-th94D-KLZw", // الفيلم 4
  ];

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    )
      .then((res) => res.json())
      .then((data) => {
        const selectedMovie = data[id];
        setMovie(selectedMovie);
      });
  }, [id]);

  if (!movie) return <p>جارى التحميل .....</p>;

  return (
    <div
      style={{
        margin: "40px auto",
        textAlign: "center",
        maxWidth: "800px",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 15px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <p>{movie.Runtime}</p>

      <img
        src={movie.Poster}
        alt={movie.Title}
        width="300px"
        style={{
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
        }}
      />

      {isLoggedIn ? (
        <>
          <button
            style={{
              display: "block", // علشان يكون في سطر لوحده
              margin: "20px auto 0", // مسافة صغيرة فوق الزرار وتوسيطه
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
            onClick={() => setShowVideo(true)}
          >
            شاهد الفيلم
          </button>

          {/* عرض الفيديو بعد الضغط */}
          {showVideo && (
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <iframe
                width="720"
                height="405"
                src={videoLinks[id]} // ✅ يختار الفيديو حسب رقم الفيلم
                title={movie.Title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                }}
              ></iframe>
            </div>
          )}
        </>
      ) : (
        <p
          style={{
            color: "red",
            backgroundColor: "#fff59d",
            display: "inline-block",
            padding: "8px 12px",
            borderRadius: "4px",
            marginTop: "30px",
          }}
        >
          سجل على الموقع لمشاهده الفيلم
        </p>
      )}
    </div>
  );
}

export default Movie;
