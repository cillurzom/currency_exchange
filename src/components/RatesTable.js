import React from "react";
import Table from "react-bootstrap/Table";

const RatesTable = ({ rates }) => {
    const keys = Object.keys(rates);
    const data = keys.map((key, i) => {
        return (
            <tr key={key}>
                <td>{key}</td>
                <td>{rates[key]}</td>
            </tr>
        )
    })
    return (
        <Table className="table-dark table-striped">
            <thead>
                <tr>
                    <td><strong>Currency</strong></td>
                    <td><strong>Rate</strong></td>
                </tr>
            </thead>
            <tbody>
                {data}
            </tbody>
        </Table>
    )
}

export default RatesTable;