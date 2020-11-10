import React, { useState, useEffect } from 'react';
import { link, useRouteMatch, useParams } from 'react-router-dom';

export default function MovieCard ({title, director, metascore, stars}) {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  if (!movie) return (
    <Link to={`/movie/${movie.id}`}>
    <div className='movie-card'>
      <h2>{title}</h2>
      <div className='movie-director'>
        Director: <em>{director}</em>
      </div>
      <div className='movie-metascore'>
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
    </Link>
  );
}
