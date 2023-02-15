

function BugLogTable(props) {
  const { bugLogs } = props;
  return (
    <table style={{ padding: "10px", margin: "5px" }}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Date</th>
                <th>Project</th>
                <th>Description</th>
                <th>Severity</th>
                <th>Priority</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {bugLogs.map((bugLog) => (
                <tr key={bugLog.id}>
                    <td>{bugLog.id}</td>
                    <td>{bugLog.name}</td>
                    <td>{bugLog.date}</td>
                    <td>{bugLog.project}</td>
                    <td>{bugLog.description}</td>
                    <td>{bugLog.severity}</td>
                    <td>{bugLog.priority}</td>
                    <td>{bugLog.status}</td>
                </tr>
            ))}
        </tbody>
    </table>
  );
}

export default BugLogTable;