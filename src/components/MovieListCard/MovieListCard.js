import {NavLink} from "react-router-dom";

import {getPoster} from "../../configs";
import css from './MovieListCard.module.css'
import StarRating from "../StarsRating/StarRating";

const MovieListCard = ({movie}) => {

    const {title,release_date,poster_path,vote_average,genre_ids} = movie


    return(

        <div className={css.cardItem}>
            <NavLink to={'/movies/details'} state={{...movie}} >
                <div className={css.cardInner}>
                    <div className={css.cardPhoto}>
                        <img src={`${getPoster}${poster_path}`} alt={title} />
                    </div>
                    <div className={css.cardInfo}>
                        <h4>{title}</h4>
                        <p>{release_date}</p>
                        <div>
                            <div> <StarRating
                                width={25}
                                defaultState={vote_average}
                                height={30}
                                maxValue={10}
                                readOnly={true}
                            /></div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export {
        MovieListCard
};
