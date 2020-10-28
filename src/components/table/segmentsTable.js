import React, { useState } from "react";
import Table from 'react-bootstrap/Table';

const SegmentsTable = (data) => {
    return (
        <div className="segments-table">
            <h4 className="page-title">Campaign {data.title}</h4>
            <Table striped bordered hover responsive>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Subscriber Count
                    </th>
                </tr>
                {data.data.map((item) => {
                    return (
                        <tr>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.subscribers_count}
                            </td>
                        </tr>
                    )
                })}
            </Table>
        </div>
    )
}

export default SegmentsTable;