import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movies({ isLoggedIn }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div style={{ justifyContent: "center" }}>
      <h1>قائمة الافلام</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {/* نستخدم index كـ id في اللينك */}
            <Link to={`/movies/${index}`}>{movie.Title}</Link>
            <br />
            {isLoggedIn ? (
              <button style={{ marginTop: "5px" }}> اضغط على اللينك</button>
            ) : (
              <p style={{ color: "red" }}>سجل على الموقع لمشاهده الفيلم</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
