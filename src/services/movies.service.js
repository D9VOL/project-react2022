import {axiosService} from "./axios.service";

import {urls} from "../configs";

const moviesService = {
    getAll: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    getMovieById: (id) => axiosService.get(`${urls.movieId}/${id}`)

}

export {
    moviesService
};
