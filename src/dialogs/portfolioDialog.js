import React, { Component } from "react";
import Dialog from "react-dialog";
import "react-dialog/css/index.css";
import "../App.css";

class InputDialog extends Component {
	constructor() {
		super();
		this.state = {
			isDialogOpen: false
		};
	}

	nameInput = React.createRef();

	openDialog = () => this.setState({ isDialogOpen: true });

	createPortfolio = () => {
		this.props.action(this.nameInput.current.value);
		this.handleClose();
	};

	handleClose = () => {
		this.setState({ isDialogOpen: false });
	};

	render() {
		return (
			<div className="container">
				<button type="button" onClick={this.openDialog}>
					Create new portfolio
				</button>
				{this.state.isDialogOpen && (
					<Dialog
						title="Create new portfolio"
						modal={true}
						onClose={this.handleClose}
						buttons={[
							{
								text: "Create portfolio",
								onClick: () => this.createPortfolio()
							}
						]}
					>
						<label>Portfolio name: </label>
						<input ref={this.nameInput} type="text" />
					</Dialog>
				)}
			</div>
		);
	}
}

export default InputDialog;
