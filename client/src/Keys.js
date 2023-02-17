import BugLogTable from "./BugLogTable";

function Keys(props) {

    console.log(props.bugLogs)

    return (
        <>
            <h3>Part 3: Keys</h3>
            <BugLogTable bugLogs={props.bugLogs} />
        </>

    );
}

export default Keys;