import React from 'react';
import PropTypes from 'prop-types';

function Movies() {
    return <h1></h1>
}

//title,summery,(medium_cover_image->poster)
Movies.propTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summery:PropTypes.string.isRequired,
    paster:PropTypes.string.isRequired,
};

export default Movies;