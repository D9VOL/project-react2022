import {Link, Navigate} from "react-router-dom";
import css from "./Header.module.css"

const Header = () => {

    return (
        <div className={css.mainHeader}>

            <div><Link to={'/'}>Home</Link></div>


        </div>
    );
}

export {
        Header
};
    