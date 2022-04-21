import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

function Movies({ id, title, year, summary, poster, genres }) {
    return (
        <div className='movie__data'>
            <img src={poster} alt={title} title={title} />
            <h3 className='movie__title'>{title}</h3>
            <h5 className='movie__year'>{year}</h5>
            <ul className='movie__genres'>
                {genres.map((genre,index)=>{
                    return <li key={index} className='movie_genre'>{genre}</li>
                })}
            </ul>
            <p className='movie__summary'>{summary.slice(0,180)}...</p>
        </div>
    )
}

//title,summary,(medium_cover_image->poster)
Movies.propTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    paster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;