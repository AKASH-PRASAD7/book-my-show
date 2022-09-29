import React from 'react';
import MovieNavBar from '../Components/MovieNavBar';

const Movielayout = (Component) => (...props) => {
    return (
        <div>
            <MovieNavBar />
            <Component {...props} />
            <div>Footer</div>
        </div>
    )
}

export default Movielayout;