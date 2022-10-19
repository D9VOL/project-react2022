
import {Header} from "../components";
import {Outlet} from "react-router-dom";




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
    