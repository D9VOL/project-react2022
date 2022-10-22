import {axiosService} from "./axios.service";

import {urls} from "../configs";

const moviesService = {
    getAll: (genreID,page = 1 ) =>
        axiosService.get(urls.movies, {params: {with_genres:`${genreID}`,page}})

}

export {
    moviesService

};
