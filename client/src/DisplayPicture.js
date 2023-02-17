import { useState } from "react";

function DisplayPicture () {
    const [color, setColor] = useState(0);

    const handleChangeColor = () => {
        setColor(color + 1);
    }

    let actualColor = "red";
    if (color % 3 === 0) {
        actualColor = "red";
    } else if (color % 3 === 1) {
        actualColor = "blue";
    } else {
        actualColor = "green";
    }

    return (
        <div style={{ backgroundColor: actualColor }}>
                <img src='https://www-cs-faculty.stanford.edu/~knuth/don.gif' alt='Donald Knuth' />
                <div>
                    <button onClick={handleChangeColor}>Change Color</button>
                </div>
        </div>

    );
}

export default DisplayPicture;
