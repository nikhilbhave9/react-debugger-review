import { useState, useEffect } from "react";

function SuspenseChild() {

    const [bugLogs, setBugLogs] = useState([]);

    useEffect(() => {
        fetch("/bug")
            .then((res) => res.json())
            .then((bugLogs) => setBugLogs(bugLogs))
            .catch((err) => console.log(err));
    }, []);


    return (
        <>
            <style>
                {`
                        table{
                            margin-left: auto;
                            margin-right: auto;
                            margin-bottom: 10px;
                            border:1px solid black;
                            border-collapse: collapse;
                            width: 90%;
                        }
                        th, td{
                            border:1px solid black;
                            padding: 15px;
                        }
                    `}
            </style>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>OS</th>
                        <th>Platform</th>
                        <th>Project</th>
                        <th>Product</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {bugLogs.map((bugLog) => (
                        <tr key={bugLog.id}>
                            <td>{bugLog.id}</td>
                            <td>{bugLog.op_sys}</td>
                            <td>{bugLog.platform}</td>
                            <td>Mozilla</td>
                            <td>{bugLog.product}</td>
                            <td>{bugLog.priority}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default SuspenseChild;