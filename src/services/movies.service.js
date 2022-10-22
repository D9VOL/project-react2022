import {axiosService} from "./axios.service";

import {urls} from "../configs";

const moviesService = {
    getAll: (page = 1 ) =>axiosService.get(urls.movies, {params: {page}}),

    getGenreID: (genreID,page = 1 ) =>
        axiosService.get(urls.movies, {params: {with_genres:`${genreID}`,page}})

}

export {
    moviesService

};
