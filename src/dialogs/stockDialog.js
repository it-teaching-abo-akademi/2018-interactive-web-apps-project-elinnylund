import React, { Component } from "react";
import Dialog from "react-dialog";
import "react-dialog/css/index.css";
import "../App.css"

class StockDialog extends Component {
	constructor() {
		super();
		this.state = {
			isDialogOpen: false
		};
	}
	stockInput = React.createRef();
	sharesInput = React.createRef();

	openDialog = () => {
		if (this.props.disabled) {
			alert("You have reached the maximum amount of stocks in this portfolio!");
		} else {
			this.setState({ isDialogOpen: true });
		}
	};

	handleClose = () => {
		this.setState({ isDialogOpen: false });
	};

	addStocks = (e) => {
		e.preventDefault();
		this.props.action(
			this.stockInput.current.value,
			this.sharesInput.current.value
		);
	}

	render() {
		return (
			<div className="container">
				<button type="button" onClick={this.openDialog}>
					Add stocks
				</button>
				{this.state.isDialogOpen && (
					<Dialog
						title={"Add stocks to " + this.props.name}
						modal={true}
						onClose={this.handleClose}
						buttons={[
							{
								text: "Close",
								onClick: () => this.handleClose()
							}
						]}
					>
					<form onSubmit={this.addStocks}>
						<div className="stock-input">
							<label>Stock symbol: </label>
							<input ref={this.stockInput} type="text" required/>
						</div>
						<div className="stock-input">
							<label>Amount of shares: </label>
							<input type="number" min="1" ref={this.sharesInput} required/>
						</div>
						<button className="stock-input" type="submit">Add stocks</button>
						</form>
					</Dialog>
				)}
			</div>
		);
	}
}

export default StockDialog;
