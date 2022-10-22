import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {MovieInfo, MoviesPage} from "./pages";
import {GenrePage} from "./pages/GenrePage/GenrePage";


function App() {
    console.log('APP');
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movies/details'} element={<MovieInfo/>}/>
                <Route path={'/genre/:id'} element={<MoviesPage/>}/>
            </Route>
        </Routes>

    );
}

export default App;
