import { useState, useEffect } from "react";

function SuspenseChild() {
    const [data, setData] = useState(null);

    useEffect (() => {
            fetch('/api')
                .then((response) => response.json())
                .then(data => setData(data.message))
                .catch((error) => {
                    console.log(error)
                });    
    }, []);


    return (
        <div>
            <h3>Suspense Child</h3>
            <p>{data}</p>
        </div>
    );
}

export default SuspenseChild;