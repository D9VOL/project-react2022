import {axiosService} from "./axios.service";

import {urls} from "../configs";

const moviesService = {
    getAll: (page = 1, with_genre=0) => axiosService.get(urls.movies, {params: {with_genre,page}})

}

export {
    moviesService

};
