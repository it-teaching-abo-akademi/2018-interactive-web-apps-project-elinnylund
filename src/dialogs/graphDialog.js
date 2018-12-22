import React, { Component } from "react";
import Dialog from "react-dialog";
import "react-dialog/css/index.css";
import { Line } from "react-chartjs-2";
import "../App.css";
import { getHistoricData } from "../appService";
import { getRandomColor } from "../utils";

class GraphDialog extends Component {
	constructor() {
		super();
		this.state = {
			isDialogOpen: false,
			data: {},
			checked: []
		};
	}
	startDate = React.createRef();
	endDate = React.createRef();

	openDialog = () => {
		this.setState({
			data: {}
		});
		this.setState({ isDialogOpen: true });
	};

	handleClose = () => {
		this.setState({ isDialogOpen: false });
	};

	updateGraphData = () => {
		var start = this.startDate.current.value;
		var end = this.endDate.current.value;
		var data = { datasets: [] };
		var dateLabels = [];
		var promises = [];
		var alertMessage;

		this.state.checked.forEach(function (symbol) {
			var histData = [];
			dateLabels = [];

			var promise = getHistoricData(symbol).then(response => {
				if (!response.data["Time Series (Daily)"]) {
					//If too many requests is being made the service returns a note instead of historical data
					alertMessage = response.data.Note;
				}
				for (var element in response.data["Time Series (Daily)"]) {
					var date = new Date(element);
					var startDate = new Date(start);
					var endDate = new Date(end);
					if (date > startDate && date < endDate) {
						histData.push(response.data["Time Series (Daily)"][element]["4. close"]);
						dateLabels.push(element);
					}
				}
				data.datasets.push({
					label: symbol,
					data: histData,
					fill: true,
					backgroundColor: getRandomColor()
				});
			});
			promises.push(promise);
		});
		Promise.all(promises).then(() => {
			//Display the alert and empty the data since there is not data for all checked symbols
			if (alertMessage) {
				alert(alertMessage);
				data = {}
				alertMessage = null;
			}
			data.labels = [...new Set(dateLabels)];
			this.setState({
				data: data
			});

		});
	}

	setChecked = (symbol, checked) => {
		var checkedSymbols = [...this.state.checked];
		if (checked) {
			checkedSymbols.push(symbol);
		} else {
			checkedSymbols = checkedSymbols.filter(function (value) {
				return value !== symbol;
			});
		}
		this.setState({
			checked: checkedSymbols
		})
	}

	render() {
		return (
			<div className="container">
				<button type="button" onClick={this.openDialog}>
					Perf graph
				</button>
				{this.state.isDialogOpen && (
					<Dialog
						title={"Performance graph for " + this.props.name}
						modal={true}
						onClose={this.handleClose}
						height={this.props.height}
						width={this.props.width}
					>
						<div className="graph-container">
							<div className="symbols-list">
								{this.props.data.map(key => (
									<div className="stock-select" key={key.symbol}>
										<p>
											<input type="checkBox" onChange={e => this.setChecked(key.symbol, e.target.checked)} />
											{key.symbol}
										</p>
									</div>
								))}
							</div>
							<div className="chart-container">
								<Line data={this.state.data} />
							</div>
						</div>
						<div className="date-selectors">
						<label>Start date: </label>
						<input type="date" ref={this.startDate} />
						<label>End date: </label>
						<input type="date" ref={this.endDate} />
						<button onClick={this.updateGraphData}>Update graph</button>
						</div>
					</Dialog>
				)}
			</div>
		);
	}
}

export default GraphDialog;
