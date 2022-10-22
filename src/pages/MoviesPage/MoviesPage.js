import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useLocation, useParams, useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slices";
import {MovieListCard} from "../../components";
import css from './Pages.module.css'



const MoviesPage = () => {

    const {movies, loading} = useSelector(state => state.movies);

    const {results} = movies;

    const dispatch = useDispatch();

    const {id:genreID} = useParams();

    let [query, setQuery] = useSearchParams({with_genres:`${genreID}`,page: '1'});

    const page = query.get('page');
    const with_genres = query.get('with_genres');


    useEffect(() => {
        dispatch(movieActions.getAll({page}))

    }, [page]);

    useEffect(() => {
        dispatch(movieActions.getGenreID({with_genres,page}))

    }, [genreID,page]);

    const prevPage = () => {
        const prev = +page - 1;
        console.log(typeof page)
        if (prev >= 1) {
            setQuery({page: `${prev}`})
        }
    }

    const nextPage = () => {
        const next = +page + 1;
        if (next >= 1) {
            setQuery({page: `${next}`})
        }
    }

    return (
        <div className={css.moviePages}>

            <div className={css.movieList}>
                {
                    results?.map(movie => <MovieListCard key={movie.id} movie={movie}/>)
                }
            </div>


            {/*<div>*/}
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
            {/*</div>*/}


        </div>


    );
}


export {
    MoviesPage
};
    