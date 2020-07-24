import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div style={{ display: "flex" }}>
      <img src={poster} alt={title} />
      {console.log(poster)}
      <div className="movie" style={{ padding: "30px" }}>
        <h1>
          {title} / {year}
        </h1>
        <h3>{genres.map((genre) => `"${genre}" `)}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
