import React from "react";
import noPoster from "../../images/no-poster.png";
import { Link } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({ movie, isList, id, handleRemove }) {
  return (
    <div key={movie.id} className="movie">
      <Link to={"/movie/" + movie.id}>
        <div
          className="poster-container"
          style={{
            backgroundImage: movie.poster_path
              ? `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`
              : `url(${noPoster})`,
          }}
        />
      </Link>
      <div className="movie-info">
        <h4>{movie.title}</h4>
        {isList && <button onClick={() => handleRemove(id)}>Remove</button>}
      </div>
    </div>
  );
}
