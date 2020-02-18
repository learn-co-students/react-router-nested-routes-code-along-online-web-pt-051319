import React from 'react';

const MovieShow = ({ match, movies }) => {
	return (
		<React.Fragment>
			<h3>{ movies[match.params.movieId].title }</h3>
		</React.Fragment>
	)
}

export default MovieShow
