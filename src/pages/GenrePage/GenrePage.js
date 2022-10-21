import {useLocation} from "react-router-dom";

const GenrePage = ({genre}) => {
    let location = useLocation()

    console.log(location)

    return(
        <div>
            {JSON.stringify(genre)}
        </div>
    );
}

export {
        GenrePage
};
