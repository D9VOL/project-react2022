import {Link} from "react-router-dom";


import css from "./Header.module.css"
import {GenresList} from "../GenresList/GenresList";
import {useState} from "react";
import {Search} from "../Search/Search";


const Header = () => {

    const [value,setValue] = useState();
    const refresh = ()=>{
        setValue({})}

    return (
        <div className={css.mainHeader}>

            <Link  to={'/'} onClick={{refresh}}>HOME</Link>
            <GenresList/>
            <Search/>

        </div>
    );
}

export {
        Header
};
    