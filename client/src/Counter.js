import { useState } from 'react';
import SlowComponent from './SlowComponent';

function Counter ({countVar, countObject, countFunction}) {
    const [count, setCount] = useState(countObject.startCount);

    const handleClick = () => {
        setCount(count + 1);
    };
    
    return (
        <div>
        <SlowComponent />
        <p>The count variable is: {countVar}</p>
        <p>The current {countObject.title} count is: {count}</p>
        <button onClick={handleClick}>
            Increment
        </button>
        <p>The count function does the following
            <button onClick={countFunction}>
                Click
            </button>
        </p>
        </div>
    );
}

export default Counter;