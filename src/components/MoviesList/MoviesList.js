
import {MovieListCard} from "../MovieListCard/MovieListCard";

import css from "./MoviesList.module.css";


const MoviesList = ({results}) => {



    return (

        <div className={css.movieList}>

            {results?.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}


        </div>
    )
}

export {
    MoviesList
};
    