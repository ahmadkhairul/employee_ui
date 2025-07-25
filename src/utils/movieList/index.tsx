import { useState } from "react";

interface Movie {
  imdbID: string;
  Title: string;
}

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [year, setYear] = useState<number | "">("");

  const handleSearch = async () => {
    if (!year) return;

    try {
      const res = await fetch(
        `https://jsonmock.hackerrank.com/api/movies?Year=${year}`
      );
      const data = await res.json();
      setMovies(data.data || []);
    } catch (err) {
      console.error("Failed to fetch movies:", err);
      setMovies([]);
    }
  };

  return (
    <div>
      <h1>Movie Search by Year</h1>

      <div>
        <label htmlFor="year">Year:</label>
        <input
          id="year"
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value) || "")}
        />
        <button onClick={handleSearch}>Cari</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.imdbID}>
              <td>{movie.Title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
