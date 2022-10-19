import {useLocation} from "react-router-dom";

import {getPoster} from "../../configs";
import css from "./MovieInfo.module.css"


const MovieInfo = () => {

let location = useLocation()

let {state:movie} = location

    return(
        <div className={css.MovieInfoPage}>
            <h3 className={css.colorText}>{movie.title}</h3>
            <div className={css.DFlexDetails}>
                <div>
                    <h2 className={css.colorText}>Overview</h2>
                    <p className={css.textOverview.colorText}>{movie.overview}</p>
                    <div className={css.DFlexDetails.space}>
                        <div>
                            <p className={css.colorText}>Original Language: {movie.original_language}</p>
                            <p className={css.colorText}>Release date: {movie.release_date}</p>
                        </div>
                        <div className={css.DFlexDetails}>
                            <img className={css.imdb}
                                 src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                                 alt={movie.vote_average}/>
                            <h2 className={css.colorText}>{movie.vote_average}</h2>
                        </div>
                    </div>
                </div>
                <img src={`${getPoster}${movie.poster_path}`} alt={movie.title}/>
            </div>
        </div>
    );
}

export {
        MovieInfo
};
    