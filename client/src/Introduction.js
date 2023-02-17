
function Introduction(props) {
    return (
        <div style={{ marginBottom: "20px" }}>
            <h3>Part 1: Handling Props</h3>
            <p>{props.introMessage}</p>
            <p>Hi, we are {props.names.name1} and {props.names.name2}</p>
            <div>
                We are planning to demonstrate the following: 
                <button onClick={props.propFunction}>Click</button>
            </div>
        </div>
    )
}

export default Introduction;