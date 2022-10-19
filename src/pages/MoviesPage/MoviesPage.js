import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slices";
import {MoviesList} from "../../components";
import css from './Pages.module.css'

const MoviesPage = () => {
    console.log('MoviePages')

    const {movies, loading} = useSelector(state => state.movies);

    const {results} = movies;

    const dispatch = useDispatch();

    let [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page');

    useEffect(() => {
        dispatch(movieActions.getAll({page}))

    }, [page]);

    const prevPage = () => {
        const prev = +page - 1;
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
            <MoviesList results={results}/>
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
    