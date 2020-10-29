import React from "react";
import Table from 'react-bootstrap/Table';

const CampaignTable = ({ campaigns }) => {
  return (
    <div className="campaign-table">
      <Table striped hover responsive>
        <thead className="borderless">
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
        </thead>
        <tbody>
        {campaigns.map((item, i) => {
          return (
            <tr key={i}>
              <td>
                {i + 1}
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
                <button
                  className="edit-btn">Edit
                </button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </Table>
    </div>
  )
}

export default CampaignTable;