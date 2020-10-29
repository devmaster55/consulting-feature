import React, { useState } from "react";
import Table from 'react-bootstrap/Table';

const SegmentsTable = ({ segments }) => {
	return (
		<div className="segments-table">
			<Table striped responsive>
				<thead>
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
				</thead>

				<tbody>
				{segments.map((item, index) => {
					return (
						<tr key={index}>
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
				</tbody>
			</Table>
		</div>
	)
}

export default SegmentsTable;