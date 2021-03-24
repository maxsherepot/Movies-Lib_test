import React from 'react';
import MovieCard from './MovieCard';



const MoviesList = ({ movies }) => {

    return (
        <section className="mt-2 mb-5">
            {movies.length === 0
                ?
                <div className="text-center">No movies yet</div>
                :
                <div className="row mt-2 mt-md-4">
                    {
                        movies.map(item => {
                            return (
                                <MovieCard
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            }
        </section>
    );
};


export default MoviesList;
