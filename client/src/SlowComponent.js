import { useMemo } from 'react';

function SlowComponent () {

    // const n = useMemo(() => {

    //     // Expensive calculation that takes 300+ms
    //     return [...Array(3000000).keys()].reduce((p, c) => p + c)

    // }, [])
    
    // return <p> Expensive calculation - {n} </p>

    const n = [...Array(3000000).keys()].reduce((p, c) => p + c)

    return <p> Expensive calculation - {n} </p>
}

export default SlowComponent;