import { useContext } from "react";
import FrameworkContext from './FrameworkContext';

function DisplayPicture () {

    const framework = useContext(FrameworkContext);

    return (
        <div>
            <img src='https://www-cs-faculty.stanford.edu/~knuth/don.gif' alt='Donald Knuth' />
            <p>(PS: We are currently working with {framework})</p>
        </div>
    );
}

export default DisplayPicture;
