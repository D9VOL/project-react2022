import {Link, Navigate, Outlet} from "react-router-dom";


import css from "./Header.module.css"
import {GenresList} from "../GenresList/GenresList";
import {useState} from "react";

const Header = () => {

    const [value,setValue] = useState();
    const refresh = ()=>{
        setValue({})}

    return (
        <div className={css.mainHeader}>

            <Link  to={'/'} onClick={{refresh}}>HOME</Link>
            <GenresList/>

        </div>
    );
}

export {
        Header
};
    