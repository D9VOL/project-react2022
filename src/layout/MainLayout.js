import {Outlet} from "react-router-dom";

import {Header} from "../components";

const MainLayout = () => {
    console.log('main');
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

export {
    MainLayout
};
    