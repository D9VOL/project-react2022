// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import {useDispatch, useSelector} from "react-redux";
// import {useEffect} from "react";
// import {genreActions} from "../../redux/slices/genre.slice";
// import {Link} from "react-router-dom";
//
//     const GenresListNew = () => {
//
//     const {genres, loading} = useSelector(state => state.genres);
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//             dispatch(genreActions.getAll())
//
//         }, []);
//
//
//     const [anchorEl, setAnchorEl] = React.useState(null);
//
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//
//     return (
//         <div>
//             <Button
//                 id="basic-button"
//                 color="primary"
//                 aria-controls={open ? 'basic-menu' : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? 'true' : undefined}
//                 variant="contained"
//                 size="medium"
//                 onClick={handleClick}
//             >
//                 Genre
//             </Button>
//             <Menu
//                 id="basic-menu"
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClick}
//                 MenuListProps={{
//                     'aria-labelledby': 'basic-button',
//                 }}
//             >
//             {genres.genres?.map(genre => <MenuItem
//                 onClick={handleClose}
//                 component={Link} to={'/genre/'+`${genre.id}`}
//                 state={{...genre}}
//                 key={genre.id}
//                 value={genre.id}
//                 >
//                 {genre.name}
//                 </MenuItem>)}
//
//             </Menu>
//         </div>
//     );
// }
//
// export {GenresListNew}
