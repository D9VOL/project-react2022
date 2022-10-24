import {useDispatch, useSelector} from "react-redux";
import {useRef, useState} from "react";

import {movieActions} from "../../redux/slices";


const Search = () => {

    const dispatch = useDispatch();

    const [value, setVelue] = useState('');
    const inputRef = useRef(null);


    const onClickClear = () => {
        dispatch(movieActions.getSearch({value}))
        setVelue('');
        inputRef.current.focus();
    };

    const onChangeInput = (event) => {
        setVelue(event.target.value);
        dispatch(movieActions.getSearch({value}));
    };

    return(
        <div>

            <input
                type="text"
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                placeholder={'Search...'}
            />
            {
                value && (
                    <button  onClick={onClickClear}/>
                )
            }


        </div>
    );
}

export {
        Search
};
    