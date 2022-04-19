import React from 'react';
import PropTypes from 'prop-types';

function Movies({ id, title, year, summary, poster }) {
    return (
        <div className='movie__data'>
            <img src={poster} alt={title} title={title} />
            <h3 className='movie__title'>{title}</h3>
            <h5 className='movie__year'>{year}</h5>
            <p className='movie__summary'>{summary}</p>
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
};

export default Movies;