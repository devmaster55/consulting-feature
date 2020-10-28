import React, { useEffect, useState } from "react";
import EditCampaignModal from "../modals/editCampaign";
import Table from 'react-bootstrap/Table';

const CampaignTable = (data) => {
    console.log(data);
    const [isShowingEditModal, showEditModal] = useState(true);
    const [rowNum, setRowNum] = useState(0);

    const toggle = () => {
        showEditModal(!isShowingEditModal);
    }

    console.log(isShowingEditModal)

    return (
        <div className="campaign-table">
            <h4 className="page-title">{data.title} Campaigns</h4>
            <EditCampaignModal
                data={data.data[rowNum]}
                hide={isShowingEditModal}
                toggle={toggle}
            />
            <Table striped bordered hover responsive>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Text
                    </th>
                    <th>
                        Status
                    </th>
                    <th>
                        Segment_id
                    </th>
                    <th>
                        Media
                    </th>
                    <th>
                        Stats
                    </th>
                    <th>
                        Sent
                    </th>
                    <th>
                        Clicked
                    </th>
                </tr>
                {data.data.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.text}
                            </td>
                            <td>
                                {item.status}
                            </td>
                            <td>
                                {item.segment_id}
                            </td>
                            <td>
                                {item.media}
                            </td>
                            <td>
                                {item.stats ? "Yes" : "N/A"}
                            </td>
                            <td>
                                {item.stats ? item.stats.clicked : "N/A"}
                            </td>
                            <td>
                                {item.stats ? item.stats.clicked : "N/A"}
                            </td>
                            <td>
                                <button onClick={((i) => {
                                    toggle();
                                })}
                                className="edit-btn">Edit</button>
                            </td>
                        </tr>
                    )
                })}
            </Table>
        </div>
    )
}

export default CampaignTable;