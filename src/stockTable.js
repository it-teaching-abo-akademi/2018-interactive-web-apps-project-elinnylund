import React, { Component } from "react";
import ReactTable from "react-table";
import "./App.css"

class StockTable extends Component {
	getColumns() {
		var columns = [
			{
				Header: "Name",
				id: "name",
				accessor: d => d.data["01. symbol"]
			},
			{
				Header: "Unit value",
				id: "unitValue",
				accessor: d => parseFloat(d.data["05. price"]).toFixed(2)
			},
			{
				Header: "Quantity",
				accessor: "shares"
			},
			{
				Header: "Total value",
				id: "totalValue",
				accessor: d => (d.data["05. price"] * d.shares).toFixed(2)
			},
			{
				Header: "Select",
				accessor: "selected",
				Cell: ({ original }) => {
					return (
						<input
							type="checkbox"
							className="checkbox"
							checked={original.selected}
							onChange={() => this.checked(original)}
						/>
					);
				}
			}
		];
		return columns;
	}

	checked = stock => {
		this.props.onSelect(stock);
	};

	render() {
		const columns = this.getColumns();
		return (
			<ReactTable
				data={this.props.data}
				columns={columns}
				showPagination={false}
				resizable={false}
				minRows={3}
			/>
		);
	}
}

export default StockTable;
