import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {genreActions} from "../../redux/slices/genre.slice";



import {Link} from "react-router-dom";



const GenresList = () => {

    const {genres, loading} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenre())

    }, []);


    const [genre, setGenre] = useState('');

    const handleChange = (event: SelectChangeEvent) => {

        setGenre(event.target.value);
    };

    return (

        <FormControl sx={{m: 2, minWidth: 250}} size="small">
            <InputLabel id="demo-select-small">Genres</InputLabel>

            <Select
                displayEmpty={false}
                labelId="demo-select-small"
                id="demo-select-small"
                value={genre}
                label="Genre"
                onChange={handleChange}
            >
                {genres.genres?.map(genre =>
                    <MenuItem
                        value={genre}
                        key={genre.id}
                        state={{...genre}}
                        onClick={()=>dispatch()}
                        component={Link} to={'/genre/'+`${genre.id}`}

                    >
                        {genre.name}
                    </MenuItem>)}

            </Select>

        </FormControl>
    );
}

export {GenresList}
