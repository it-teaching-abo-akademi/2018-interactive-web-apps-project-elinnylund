import React, { Component } from "react";
import Portfolio from "./Portfolio";
import "./App.css";
import PortfolioDialog from "./dialogs/portfolioDialog";
import { getStockData } from "./appService";

class App extends Component {
	state = {
		dialogIsOpen: false,
		portfolios: {}
	};

	constructor() {
		super();
		this.addPortfolio = this.addPortfolio.bind(this);
	}

	componentDidUpdate = () => {
		localStorage.setItem("portfolios", JSON.stringify(this.state.portfolios));
	};

	componentDidMount() {
		const localStoragedata = JSON.parse(localStorage.getItem("portfolios"));
		if (localStoragedata) {
			var data = this.fetchData(localStoragedata);
			this.setState({
				portfolios: data
			});
		}
	}

	fetchData = (localStoragedata) => {
		Object.keys(localStoragedata).forEach(portfolio => {
			localStoragedata[portfolio].stocks.forEach(stock => {
				getStockData(stock.symbol).then(response => {
					stock.data = response;
				});
			});
		});
		return localStoragedata;
	};

	addPortfolio = name => {
		if (Object.keys(this.state.portfolios).length < 10) {
			const portfolios = { ...this.state.portfolios };
			portfolios[`${Date.now()}`] = { name: name, stocks: [] };
			this.setState({
				portfolios: portfolios
			});
		} else {
			alert("You can not have more than 10 portfolios!");
		}
	};

	removePortfolio = portfolioKey => {
		const portfolios = { ...this.state.portfolios };
		delete portfolios[portfolioKey];
		this.setState({
			portfolios: portfolios
		});
	};

	render() {
		return (
			<div className="App">
				<PortfolioDialog action={this.addPortfolio} />
				<div className="portfolio-grid">
					{Object.keys(this.state.portfolios).map(key => (
						<Portfolio
							key={key}
							className="grid-item"
							name={this.state.portfolios[key].name}
							stocks={this.state.portfolios[key].stocks}
							removePortfolio={this.removePortfolio}
							index={key}
							onChange={this.componentDidUpdate}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
