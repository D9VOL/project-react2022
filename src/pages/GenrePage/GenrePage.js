// const GenrePage = () => {
//
//     return(
//         <div>
//         ТУТ МАЛИ БУТИ ЖАНРИ
//         </div>
//     );
// }
//
// export {
//         GenrePage
// };
//
//
// // const MoviesPage = () => {
// //
// //     const {movies, loading} = useSelector(state => state.movies);
// //
// //     const {results} = movies;
// //
// //     const dispatch = useDispatch();
// //
// //     const {id} = useParams();
// //     console.log({id});
// //
// //     let [query, setQuery] = useSearchParams({with_genres:'1',page: '1'});
// //
// //     const page = query.get('page');
// //     const with_genres = query.get('with_genres');
// //
// //
// //     useEffect(() => {
// //         dispatch(movieActions.getAll({id,page}))
// //
// //     }, [id,page]);
// //
// //
// //
// //     const genreID = () => {
// //         const genre = 28;
// //
// //         console.log(genre);
// //
// //         if (genre >= 0) {
// //             setQuery({with_genres: `${genre}`})
// //         }
// //
// //     }
// //
// //
// //     const prevPage = () => {
// //         const prev = +page - 1;
// //         console.log(typeof +page)
// //         if (prev >= 1) {
// //             setQuery({page: `${prev}`})
// //         }
// //
// //     }
// //
// //     const nextPage = () => {
// //         const next = +page + 1;
// //         if (next >= 1) {
// //             setQuery({page: `${next}`})
// //         }
// //
// //     }
// //
// //     return (
// //         <div className={css.moviePages}>
// //             <Button onClick={genreID}>Genre</Button>
// //             <div className={css.movieList}>
// //                 {
// //
// //                     results?.map(movie => <MovieListCard key={movie.id} movie={movie}/>)
// //                 }
// //             </div>
// //
// //
// //             {/*<div>*/}
// //             <button onClick={prevPage}>Prev</button>
// //             <button onClick={nextPage}>Next</button>
// //             {/*</div>*/}
// //
// //
// //         </div>
// //
// //
// //     );
// // }
// //
// //
// // export {
// //     MoviesPage
// // };
